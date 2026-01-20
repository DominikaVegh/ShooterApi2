🏹 Shooter API – .NET + React Full-Stack Project
📌 Project overview

This project is a full-stack learning application built with ASP.NET Core and React.
The goal was to create a simple but well-structured system to manage sport shooters, including full CRUD functionality.

The backend provides a REST API, while the frontend is a separate React application consuming that API.

🧩 Features
Backend (ASP.NET Core Web API)

.NET 10

RESTful API architecture

Entity Framework Core with InMemory database

Full CRUD operations for shooters:

Create

Read (list & by ID)

Update

Delete

Swagger UI for API documentation

CORS configured for React frontend

Frontend (React)

Separate project created with Vite

React + TypeScript

Tailwind CSS for styling

Axios for HTTP communication

Shooter management:

List shooters

Add new shooter

Edit existing shooter

Delete shooter

Responsive and clean UI

🧍 Shooter model
public class Shooter
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Nationality { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Discipline { get; set; }
}

📂 Project structure
ShooterApi/
├── ShooterApi/              # ASP.NET Core Web API
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   └── Program.cs
│
└── shooter-ui/              # React frontend
    ├── src/
    │   ├── api/
    │   ├── models/
    │   ├── pages/
    │   └── App.tsx
    └── package.json

▶️ How to run the project
1️⃣ Backend
cd ShooterApi/ShooterApi
dotnet run


API runs on:
👉 http://localhost:5261

Swagger UI:
👉 http://localhost:5261/swagger

2️⃣ Frontend
cd shooter-ui
npm install
npm run dev


Frontend runs on:
👉 http://localhost:5173

🔗 API endpoints
Method	Endpoint	Description
GET	/api/shooters	Get all shooters
GET	/api/shooters/{id}	Get shooter by ID
POST	/api/shooters	Create new shooter
PUT	/api/shooters/{id}	Update shooter
DELETE	/api/shooters/{id}	Delete shooter
🎯 Project goals

Practice full-stack development

Understand frontend–backend communication

Apply clean code and best practices

Use modern frontend tooling (React, TypeScript, Tailwind)

Build a realistic CRUD application

📝 Notes

HTTPS was disabled in development to avoid certificate issues.

The database is InMemory, data is reset on backend restart.

This project focuses on learning and structure, not production readiness.

👩‍💻 Author

Dominika
Learning project – .NET & React full-stack development