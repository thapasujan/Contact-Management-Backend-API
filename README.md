# Contact Management Backend API

A RESTful backend API for managing contacts built with **Node.js**, **Express**, and **MongoDB**.
This project allows users to **create, read, update, and delete contacts** efficiently.

---

## 🔗 Repository

[GitHub Link](https://github.com/thapasujan/Contact-Management-Backend-API.git)

---

## 🛠 Technologies Used

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for building APIs
* **MongoDB** – NoSQL database for storing contacts
* **Mongoose** – MongoDB object modeling for Node.js
* **dotenv** – Environment variable management
* **express-async-handler** – Handling async errors in Express
* **Other packages:** cors, bcrypt (if authentication), etc.

---

## 🚀 Features

* Create a new contact
* Retrieve all contacts
* Retrieve a single contact by ID
* Update a contact by ID
* Delete a contact by ID
* Error handling middleware
* Environment variable configuration

---

## 📁 Project Structure

```
Contact-Management-Backend-API/
│
├── src/
│   ├── controller/        # Route handlers
│   ├── middleware/        # Error handling & auth
│   ├── models/            # Mongoose models
│   └── routes/            # API routes
│
├── .env.example           # Environment variable example
├── .gitignore             # Files/folders to ignore in Git
├── package.json           # Project dependencies & scripts
└── server.js              # Express server entry point
```

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/thapasujan/Contact-Management-Backend-API.git
cd Contact-Management-Backend-API
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```

4. Start the server:

```bash
npm start
```

Server should run on `http://localhost:5000`.

---

## 📦 API Endpoints

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/contacts`     | Get all contacts           |
| GET    | `/api/contacts/:id` | Get a single contact by ID |
| POST   | `/api/contacts`     | Create a new contact       |
| PUT    | `/api/contacts/:id` | Update a contact by ID     |
| DELETE | `/api/contacts/:id` | Delete a contact by ID     |

---

## 🌟 Contribution

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your message"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request