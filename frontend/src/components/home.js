import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import Trash from "./icons/trash.png";
import Pen from "./icons/pen.png";
import Cancel from "./icons/cancel.png";
import Add from "./icons/add.png";
import Completed from "./icons/completed.png";
import Okey from "./icons/okey.png";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTaskName, setEditTaskName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/tasks/");
        setTasks(data);
        const { data: completedData } = await axios.get(
          "http://localhost:8000/completedtasks/"
        );
        setCompletedTasks(completedData);
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleChange = (setter) => (e) => setter(e.target.value);

  const addTask = async () => {
    let trimmedTask = newTask.trim();
    if (!trimmedTask) return;

    if (
      tasks.some(
        (task) => task.task_name.toLowerCase() === trimmedTask.toLowerCase()
      )
    ) {
      setErrorMessage("Task already exists");
      return;
    } else if (
      completedTasks.some(
        (task) => task.task_name.toLowerCase() === trimmedTask.toLowerCase()
      )
    ) {
      setErrorMessage("Task already completed");
      return;
    }

    const capitalizedTask =
      trimmedTask.charAt(0).toUpperCase() + trimmedTask.slice(1).toLowerCase();

    try {
      const { data } = await axios.post("http://localhost:8000/tasks/", {
        task_name: capitalizedTask,
      });
      setTasks((prev) => [...prev, data]);
      setNewTask("");
      setErrorMessage("");
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  const updateTask = async (id) => {
    let trimmedTaskName = editTaskName.trim();
    if (!trimmedTaskName) return;

    if (
      tasks.find(
        (task) => task.task_name.toLowerCase() === trimmedTaskName.toLowerCase()
      )
    ) {
      setErrorMessage("Task already exists");
      return;
    }

    if (
      completedTasks.find(
        (task) => task.task_name.toLowerCase() === trimmedTaskName.toLowerCase()
      )
    ) {
      setErrorMessage("Task already completed");
      return;
    }
    const capitalizedTask =
      trimmedTaskName.charAt(0).toUpperCase() + trimmedTaskName.slice(1);

    try {
      const { data } = await axios.put(`http://localhost:8000/tasks/${id}/`, {
        task_name: capitalizedTask,
      });
      setTasks((prev) => prev.map((task) => (task.id === id ? data : task)));
      setEditingTaskId(null);
      setEditTaskName("");
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${id}/`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  const taskCompleted = async (id) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;

    const isAlreadyCompleted = completedTasks.some(
      (completedTask) => completedTask.task_name === task.task_name
    );
    if (isAlreadyCompleted) return;

    try {
      await axios.delete(`http://localhost:8000/tasks/${id}/`);
      setTasks((prev) => prev.filter((task) => task.id !== id));

      const { data } = await axios.post(
        "http://localhost:8000/completedtasks/",
        {
          task_name: task.task_name,
        }
      );
      setCompletedTasks((prev) => [...prev, data]);
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main">
      <div className="home">
        <h1>Add Task</h1>

        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={handleChange(setNewTask)}
            placeholder="Enter Task Name Here"
          />
          <button className="add" onClick={addTask}>
            <img src={Add} alt="Add" />
          </button>
        </div>

        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

        <h1>Tasks List</h1>
        <ul>
          {tasks.length === 0 && <li>No tasks available</li>}
          {tasks.map((task) => (
            <li key={task.id}>
              <div>{task.id}</div>
              {editingTaskId === task.id ? (
                <div className="input-container">
                  <input
                    type="text"
                    value={editTaskName}
                    onChange={handleChange(setEditTaskName)}
                    placeholder="Edit Task Name"
                  />
                  <div className="update_buttons">
                    <button
                      className="okey"
                      onClick={() => updateTask(task.id)}
                    >
                      <img src={Okey} alt="Save" />
                    </button>
                    <button
                      className="cancel"
                      onClick={() => setEditingTaskId(null)}
                    >
                      <img src={Cancel} alt="Cancel" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="slide-in-right">
                  <strong className="task_name">{task.task_name}</strong>
                  <div className="actions">
                    <button
                      className="pen"
                      onClick={() => {
                        setEditingTaskId(task.id);
                        setEditTaskName(task.task_name);
                      }}
                    >
                      <img src={Pen} alt="Edit" />
                    </button>
                    <button
                      className="trash"
                      onClick={() => deleteTask(task.id)}
                    >
                      <img src={Trash} alt="Delete" />
                    </button>
                    <button
                      className="completed"
                      onClick={() => taskCompleted(task.id)}
                    >
                      <img src={Completed} alt="Complete" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <h1>Completed Tasks</h1>
        <ul>
          {completedTasks.length === 0 ? (
            <li>No completed tasks</li>
          ) : (
            completedTasks.map((task) => (
              <li className="slide-in-right" key={task.id}>
                <div>{task.id}</div>
                {task.task_name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
