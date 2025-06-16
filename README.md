# 🚀 Task Manager App – MERN Stack

A **full-stack Task Manager** application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with **Tailwind CSS** for styling.

This app allows users to **register/login**, **add**, **update**, **filter**, and **delete tasks**. It features **JWT-based authentication**, a modern **dark-mode UI**, and full **CRUD** functionality, all with a **responsive layout** for mobile and desktop devices.

---

## 🌐 Live Demo

🔗 **Visit here:** [task-manager-app-mern-1.onrender.com](https://task-manager-app-mern-1.onrender.com)

> ⚠️ **Note:** This project is for educational/demo purposes. Please **do not use real or sensitive personal information** while using the app.

---

## 📸 Features

| Feature             | Description                                                              |
|---------------------|--------------------------------------------------------------------------|
| 🧾 Task Management   | Add, read, update, and delete tasks                                      |
| 🔒 Authentication    | User login and registration using JWT and bcrypt                         |
| 🌓 Dark Mode UI      | Clean, modern, dark-themed interface using Tailwind CSS                  |
| 📱 Responsive Design | Optimized for mobile, tablet, and desktop                                |
| 🔍 Task Filtering    | Easily filter and manage tasks                                           |

---

## 🛠️ Tech Stack

| Layer     | Technologies Used                       |
|-----------|------------------------------------------|
| Frontend  | React.js, Tailwind CSS                   |
| Backend   | Node.js, Express.js                      |
| Database  | MongoDB                                  |
| Auth      | JWT, bcrypt                              |
| Hosting   | Render (for both frontend and backend)   |

---

## 📦 How to Run the Project Locally

### 🔧 Prerequisites

- Node.js and npm
- MongoDB installed locally or MongoDB Atlas
- Git

---

### 📁 Clone the Repository

```bash
git clone https://github.com/Bitan-Banerjee244/task-manager-app.git
cd task-manager-app
```

---

### 🚀 Backend Setup

```bash
cd backend
npm install
```

#### 📄 Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
```

```bash
npm start
```

---

### 💻 Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Visit 👉 **http://localhost:5173** in your browser.

---

## 📂 Folder Structure

```plaintext
task-manager-app/
├── backend/       # Node.js + Express API
├── frontend/      # React.js + Tailwind UI
```

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Bitan Banerjee**   

---
