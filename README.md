# To-Do Application

A full-stack To-Do application built with Django for the backend and React for the frontend. Follow these steps to set up and run the project locally.

## Initial Setup

To run the project locally, follow these steps:

### Clone the Repository

'''bash
git clone https://github.com/MidhlajBasheer/todo-python-django-react.git
cd todo-python-django-react
Backend Setup (Django)
Navigate to the backend directory:

bash
Copy code

**cd backend**
### Create a virtual environment:

bash
Copy code


""" python -m venv venv """

Activate the virtual environment:

On Windows:

bash
Copy code
venv\Scripts\activate
On macOS and Linux:

bash
Copy code
source venv/bin/activate
Install Python dependencies:

bash
Copy code
pip install -r requirements.txt
Apply database migrations:

bash
Copy code
python manage.py migrate
Create a superuser (optional):

bash
Copy code
python manage.py createsuperuser
Run the Django development server:

bash
Copy code
python manage.py runserver
The backend will be running at http://127.0.0.1:8000.

Frontend Setup (React)
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install npm packages:

bash
Copy code
npm install
Run the React development server:

bash
Copy code
npm start
The frontend will be running at http://localhost:3000.



### Key Points:
- **Code Blocks**: Use triple backticks (```) to ensure code is formatted correctly.
- **Commands**: Each block of code is clearly labeled and separated, making it easy to copy and paste.
- **Links**: Include clickable URLs for easy access.


