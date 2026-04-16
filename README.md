# Task Manager - Backend API

## Project Description
A full-stack Task Manager web application built with a Node.js/Express 
backend and MySQL database. Users can register, login, and manage their 
tasks securely using JWT authentication.

## Author
- **Name:** Bokao Junior Matende
- **Student ID:** 24019723

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL with Sequelize ORM
- **Authentication:** JWT (JSON Web Tokens) + bcrypt
- **Frontend:** React.js

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/juniorbokao2006/my-backend-project.git

2. Install dependencies:
   npm install

3. Create a .env file with:
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=myproject_db
   JWT_SECRET=yoursecretkey

4. Start MySQL via XAMPP

5. Run the server:
   npm run dev

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | /api/auth/register | Register a new user | No |
| POST | /api/auth/login | Login and get token | No |
| POST | /api/items | Create a new task | Yes |
| GET | /api/items | Get all tasks | Yes |
| GET | /api/items/:id | Get a single task | Yes |
| PUT | /api/items/:id | Update a task | Yes |
| DELETE | /api/items/:id | Delete a task | Yes |

## Live URL
Coming soon...