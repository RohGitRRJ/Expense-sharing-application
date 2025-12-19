# Expense Sharing Application (Backend)

Backend system for an expense sharing application (Splitwise-like).  
Supports group expenses, balance tracking, and simplified settlements.

---

## Tech Stack
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## What to Install (Before Running)

1. **Node.js (v18+)**
2. **MongoDB**
   - Local MongoDB **or** MongoDB Atlas
3. **Postman** (for API testing)

---

## Setup & Run

```bash
cd backend
npm install
cp .env.example .env
npm run dev

Server runs on:
http://localhost:5001

How to Test (Postman)
1. Register

POST /api/auth/register

{
  "name": "Alice",
  "email": "alice@mail.com",
  "password": "123456"
}

2. Login

POST /api/auth/login

{
  "email": "alice@mail.com",
  "password": "123456"
}


3. Use Authorization Header
Authorization: Bearer <TOKEN>
Content-Type: application/json

4. Create Group

POST /api/groups

{
  "name": "Trip",
  "members": ["USER_ID_1", "USER_ID_2"]
}

5. Add Expense

POST /api/expenses

{
  "group": "GROUP_ID",
  "title": "Hotel",
  "totalAmount": 2000,
  "paidBy": "USER_ID_1",
  "splitType": "EQUAL",
  "splits": [
    { "user": "USER_ID_1", "amount": 1000 },
    { "user": "USER_ID_2", "amount": 1000 }
  ]
}

6. Get Balances 

GET /api/balances/GROUP_ID

Example response:

[
  { "from": "USER_ID_2", "to": "USER_ID_1", "amount": 1000 }
]

