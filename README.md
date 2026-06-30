# 🚀 FastAPI CRUD Application

Welcome to the **FastAPI CRUD Application**! This project demonstrates how to build a scalable and well-structured RESTful API using **FastAPI** with clean architecture principles.

---

## ✨ Features

* ⚡ High-performance FastAPI framework
* 📝 Complete CRUD Operations
* 🌐 REST API implementation
* 🏗️ Clean Architecture
* 📦 Pydantic Schemas for validation
* 🔄 Middleware support
* 🗃️ Organized project structure

---

# 📌 CRUD Operations

This application supports all standard database operations:

* ➕ **Create**
* 📖 **Read**
* ✏️ **Update**
* ❌ **Delete**

---

# 🌍 REST API Methods

| Method        | Description               |
| ------------- | ------------------------- |
| **POST**      | Create a new resource     |
| **GET**       | Retrieve resources        |
| **PUT/PATCH** | Update existing resources |
| **DELETE**    | Remove resources          |

---

# 📡 HTTP Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| ✅ **200**   | OK                    |
| 🆕 **201**  | Created               |
| 📭 **204**  | No Content            |
| ⚠️ **400**  | Bad Request           |
| 🔐 **401**  | Unauthorized          |
| 🚫 **403**  | Forbidden             |
| 🔍 **404**  | Not Found             |
| ❌ **405**   | Method Not Allowed    |
| ⚔️ **409**  | Conflict              |
| 💥 **500**  | Internal Server Error |

---

# 🏛️ Project Architecture

The project follows a layered architecture for better maintainability and scalability.

```text
Client
   │
   ▼
Router
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
Database
```

### 📂 Folder Responsibilities

### 📌 Models

* Define database tables.
* Represent entities stored in the database.

### 📌 Routers

* Handle API routes/endpoints.
* Forward requests to controllers.

### 📌 Controllers

* Manage incoming requests.
* Validate inputs and return responses.

### 📌 Services

* Contain the core business logic.
* Coordinate operations between controllers and repositories.

### 📌 Repositories

* Interact directly with the database.
* Perform CRUD operations.

### 📌 Middleware

* Process requests before and after they reach the application.
* Handle logging, authentication, CORS, and more.

### 📌 Schemas

* Built using **Pydantic**.
* Validate request and response data.
* Serialize and deserialize objects.

---

# 📁 Suggested Project Structure

```text
fastapiapp/
│
├── app/
│   ├── controllers/
│   ├── repositories/
│   ├── routers/
│   ├── services/
│   ├── models/
│   ├── schemas/
│   ├── middleware/
│   ├── database.py
│   └── main.py
│
├── requirements.txt
├── README.md
└── .env
```

---

# 🎯 Tech Stack

* ⚡ FastAPI
* 🐍 Python
* 🗄️ SQLAlchemy
* 📦 Pydantic
* 🚀 Uvicorn

---

# 🚀 Getting Started

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
uvicorn app.main:app --reload
```

Open your browser:

* **API:** `http://127.0.0.1:8000`
* **Swagger UI:** `http://127.0.0.1:8000/docs`
* **ReDoc:** `http://127.0.0.1:8000/redoc`

---
