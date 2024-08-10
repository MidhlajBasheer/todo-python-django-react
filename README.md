# To-Do Application

A full-stack To-Do application built with Django for the backend and React for the frontend. Follow these steps to set up and run the project locally.

## Initial Setup

To run the project locally, follow these steps:

### Clone the Repository
```bash
git clone https://github.com/MidhlajBasheer/todo-python-django-react.git
 ```
```bash
cd todo-python-django-react
 ```

### Backend Setup (Django)
#### Navigate to the backend directory:
```bash
cd backend
```
#### Create a virtual environment:

```bash 
python -m venv venv
 ```

#### Activate the virtual environment:

##### On Windows:
```bash
venv\Scripts\activate
 ```

##### On macOS and Linux:
```bash
 source venv/bin/activate 
```

#### Install Python dependencies:
```bash
pip install -r requirements.txt
 ```

#### Apply database migrations:
```bash
python manage.py migrate
```

#### Create a superuser (optional):
```bash
python manage.py createsuperuser
 ```

#### Run the Django development server:
```bash
python manage.py runserver
 ```
#### The backend will be running at http://127.0.0.1:8000.

### Frontend Setup (React)

#### Navigate to the frontend directory:
```bash
cd ../frontend
 ```

#### Install npm packages:
```bash
npm install
 ```

#### Run the React development server:
```bash
npm start
```
#### The frontend will be running at http://localhost:3000.
