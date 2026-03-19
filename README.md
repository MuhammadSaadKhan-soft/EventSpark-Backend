# EventSpark Backend

EventSpark Backend is a RESTful API server for managing events, attendance, and contact messages for the EventSpark platform. It is built with **Node.js** and **Express**, storing data in JSON files.

---

## 🔗 Live API

You can access the deployed backend here: [EventSpark Backend](https://event-spark-backend.vercel.app/)

---

## 📁 Project Structure
# EventSpark Backend

EventSpark Backend is a RESTful API server for managing events, attendance, and contact messages for the EventSpark platform. It is built with **Node.js** and **Express**, storing data in JSON files.

---

## 🔗 Live API

You can access the deployed backend here: [EventSpark Backend](https://event-spark-backend.vercel.app/)

---

## 📁 Project Structure
EventSpark-Backend/
├── config/ # Configuration files (e.g., create data directories)
├── controllers/ # Request handlers for different endpoints
│ ├── attendanceController.js
│ ├── contactController.js
│ └── eventController.js
├── data/ # JSON files storing backend data
│ ├── attendance.json
│ ├── events.json
│ └── messages.json
├── routes/ # API routes mapping to controllers
│ ├── attendance.js
│ ├── contact.js
│ └── events.js
├── app.js # Express app initialization
├── server.js # Entry point to start server
├── package.json # Project dependencies and scripts
└── README.md


---

## ⚡ Features

- **Events API**: Fetch all events, filter by category, or get details by ID.
- **Attendance API**: Register users for events, list all registrations, or fetch registrations per event.
- **Contact API**: Submit messages and fetch all contact messages.
- **JSON File Storage**: All data is persisted in JSON files under `/data`.

---

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/MuhammadSaadKhan-soft/EventSpark-Backend.git
cd EventSpark-Backend

npm install

mkdir data

npm run dev
Runs the server using nodemon for hot-reload.

node server.js
Server will run at http://localhost:8000 or the port set in .env.
