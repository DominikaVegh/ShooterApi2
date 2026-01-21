## Documentation

### Project goal

The goal of this project is to create a simple but well-structured full-stack application
for managing sport shooters.
The system supports CRUD operations (Create, Read, Update, Delete) and demonstrates
communication between a .NET backend and a React frontend.

---

### System architecture

The project consists of two separate parts.

Backend – ASP.NET Core Web API  
Technology: .NET 10  
Data access: Entity Framework Core  
Database: InMemory  
Architecture: REST API (controller-based)  
API documentation: Swagger UI  

The backend is responsible for storing and managing shooter data and providing REST endpoints.

Frontend – React application  
Technology: React  
Language: TypeScript  
Build tool: Vite  
Styling: Tailwind CSS  
HTTP client: Axios  

The frontend provides a user interface for managing sport shooters
and communicates with the backend via HTTP requests.

---

### Running the project

Backend startup

Prerequisite: .NET SDK 10 installed

Command:
cd ShooterApi/ShooterApi  
dotnet run  

The API will be available at:
http://localhost:5261

Swagger UI:
http://localhost:5261/swagger

---

Frontend startup

Prerequisite: Node.js and npm installed

Command:
cd shooter-ui  
npm install  
npm run dev  

The frontend will be available at:
http://localhost:5173

---

### Example API calls

Get all shooters  
Method: GET  
URL:
http://localhost:5261/api/shooters

Example response:
[
  {
    "id": 1,
    "firstName": "Anna",
    "lastName": "Kovacs",
    "nationality": "HU",
    "dateOfBirth": "1995-05-10T00:00:00",
    "discipline": "Rifle"
  }
]

---

Create a new shooter  
Method: POST  
URL:
http://localhost:5261/api/shooters

Request body:
{
  "firstName": "Peter",
  "lastName": "Nagy",
  "nationality": "HU",
  "dateOfBirth": "1992-03-15",
  "discipline": "Pistol"
}

---

Update a shooter  
Method: PUT  
URL:
http://localhost:5261/api/shooters/1

Request body:
{
  "id": 1,
  "firstName": "Peter",
  "lastName": "Nagy",
  "nationality": "HU",
  "dateOfBirth": "1992-03-15",
  "discipline": "Rifle"
}

---

Delete a shooter  
Method: DELETE  
URL:
http://localhost:5261/api/shooters/1

---

Notes

The database is InMemory, therefore all data is lost when the backend is restarted.
This project was created for learning purposes.
HTTP is used in development to simplify configuration.

---

Created by: Dominika Vegh