# To-Do Application

A full-stack To-Do application built with Django for the backend and React for the frontend. Follow these steps to set up and run the project locally.

## Initial Setup

To run the project locally, follow these steps:

### Clone the Repository

git clone https://github.com/MidhlajBasheer/todo-python-django-react.git
cd todo-python-django-react

### Backend Setup (Django)

1. **Navigate to the backend directory:**

   cd backend

2. **Create a virtual environment:**

   python -m venv venv

3. **Activate the virtual environment:**

   - **On Windows:**

     venv\Scripts\activate

   - **On macOS and Linux:**

     source venv/bin/activate

4. **Install Python dependencies:**

   pip install -r requirements.txt

5. **Apply database migrations:**

   python manage.py migrate

6. **Create a superuser (optional):**

   python manage.py createsuperuser

7. **Run the Django development server:**

   python manage.py runserver

   The backend will be running at http://127.0.0.1:8000.

### Frontend Setup (React)

1. **Navigate to the frontend directory:**

   cd ../frontend

2. **Install npm packages:**

   npm install

3. **Run the React development server:**

   npm start

   The frontend will be running at http://localhost:3000.
