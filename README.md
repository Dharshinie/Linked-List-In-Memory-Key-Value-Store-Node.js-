
# 🔗 Linked List In-Memory Key-Value Store (Node.js)

-> This project is a mini database system created from scratch using Linked List (Data Structures) and built using Node.js (backend JavaScript runtime).

-> Think of it like a lightweight version of Redis, where data is stored in memory, not in files or actual databases like MySQL or MongoDB.

-> Instead of using arrays, we store each record (a key-value pair) in a node of a linked list. This is great for learning how data structures can be applied in real backend systems.

-> This project is a simple in-memory database built using **Node.js** and the **Singly Linked List** data structure. It allows you to perform basic database operations like **Insert, Get, Update, Delete, and View All** — without using any external databases.

---

## 🧠 Concepts Used

- Data Structures (Singly Linked List)
- REST API with Express.js
- Node.js backend development
- CRUD operations using linked list traversal
- JSON request/response handling

---

## 🚀 Features

- 🔄 Insert key-value pairs
- 🔍 Retrieve value by key
- ✏️ Update existing value
- ❌ Delete value by key
- 📃 View all stored data
- ⚙️ Backend built with Node.js + Express

---

## 📂 Project Structure

linkedList-nodejs-project/
│
├── index.js # Express server with API routes

├── linkedList.js # Linked list class with custom DB logic

├── package.json # Node dependencies

└── README.md # Project documentation

---

🛠️ API Endpoints
Method	   Endpoint	        Description

POST	- /insert	   -   Insert a key-value pair

GET	    - /get/:key	   -   Get value by key

PUT	    - /update	   -   Update value for a key

DELETE	- /delete/:key -   Delete a key-value pair

GET	    - /all	       -   List all data

---

🧪 Sample Usage (Postman)
//Insert
POST http://localhost:4000/insert
{
  "key": "1",
  "value": "Dharshinie"
}



//GET
GET http://localhost:4000/get/1
{
  "key": "1",
  "value": "Dharshinie"
}



//UPDATE
PUT http://localhost:4000/update
{
  "key": "1",
  "value": "Updated Value"
}




//PRINT ALL
GET http://localhost:4000/all

[
    {
        "key": "6",
        "value": "In-Memory Storage"
    },
    {
        "key": "5",
        "value": "Linked List"
    },
    {
        "key": "4",
        "value": "Data Structures"
    },
    {
        "key": "3",
        "value": "Fullstack Project"
    },
    {
        "key": "2",
        "value": "NodeJS Developer"
    },
    {
        "key": "1",
        "value": "dharshinie"
    }
]




//DELETE
DELETE http://localhost:4000/delete/1
"Deleted successfully"

---

### Sample Output

![Sample Output](https://github.com/user-attachments/assets/c31069dd-f4fc-4bf0-b9a2-403564e8f7b5)

---

🚀 How to Use This Project
🛠️ Prerequisites
Make sure you have the following installed:
Node.js (v14 or later)
npm (comes with Node.js)

📥 1. Clone the Repository
git clone https://github.com/Dharshinie/Linked-List-In-Memory-Key-Value-Store-Node.js-.git
cd Linked-List-In-Memory-Key-Value-Store-Node.js-

📦 2. Install Dependencies
npm install

▶️ 3. Run the Server
node index.js
Or, if you're using nodemon (dev tool):
npx nodemon index.js

This will start the server at:
📡 http://localhost:3000

---

📌 Author
Dharshinie E
[LinkedIn Profile](https://www.linkedin.com/in/dharsh-shinie/)

---

