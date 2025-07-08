# 🧾 Full-Stack ERP System (MERN)

🎯 A complete Enterprise Resource Planning (ERP) web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This system streamlines HR, Admin, and Employee operations with real-time features and role-based access control.

---

## 🚀 Tech Stack

- **Frontend:** React.js, HTML5, CSS3  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Tools & Utilities:** Git, GitHub, Postman, REST APIs  

---

## ✨ Key Features

### 🔧 HR Dashboard
- Manage attendance, employee logs, and leave requests  
- View punch-in/out history and working hours  

### 🧑‍💼 Admin Panel
- Control roles and permissions  
- Monitor analytics and manage leave balances  

### 👨‍💻 Employee Panel
- Apply for leaves and track leave status  
- Punch In / Punch Out with break tracking  

### ⏱️ Real-time Punch Log
- Log login/logout timestamps  
- Calculate total working hours  

### 📂 Leave Management
- Apply, approve, and reject leaves  
- Live updates with complete leave history  

### 🔐 Role-Based Access
- Secure views and actions for HR, Admin, and Employees  

---

## 🧪 API Testing

- All backend APIs are tested using **Postman**  
- Clean RESTful structure for modular integration  
- Secure endpoints for login, leave, attendance, etc.  

---

## 📁 Project Structure

ERP-System/
├── client/ # React frontend
│ ├── public/ # Static assets
│ └── src/
│ ├── components/ # Shared UI components
│ ├── pages/
│ │ ├── Admin/ # Admin dashboard and features
│ │ ├── HR/ # HR panel for attendance & leave mgmt
│ │ └── Employee/ # Employee panel for punch & leave
│ ├── services/ # Axios/API integrations
│ ├── App.js # App routing and layout
│ └── index.js # React entry point
│
├── server/ # Node + Express backend
│ ├── controllers/ # Route handlers
│ ├── models/ # Mongoose schemas (User, Leave, Log)
│ ├── routes/ # API endpoints for HR, Admin, Employee
│ ├── middleware/ # Auth & role check
│ └── server.js # Main backend entry
│
├── .env # Environment variables (Mongo URI, etc.)
├── .gitignore # Files to ignore in Git
├── README.md # Project documentation
└── package.json # Project metadata



---

## ⚙️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/tusharpraja/ERP-System.git
cd ERP-System


cd server
npm install
# Create a .env file with MongoDB URI and other configs
npm start


cd client
npm install
npm start
