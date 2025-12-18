
import express from "express"
import * as a from "../controllers/authController"
import * as g from "../controllers/groupController"
import * as e from "../controllers/expenseController"
import * as b from "../controllers/balanceController"
import {auth} from "../middleware/auth"
const r=express.Router()
r.post("/auth/register",a.register)
r.post("/auth/login",a.login)
r.use(auth)
r.post("/groups",g.createGroup)
r.get("/groups",g.myGroups)
r.post("/expenses",e.addExpense)
r.get("/expenses/:id",e.groupExpenses)
r.get("/balances/:id",b.balances)
export default r
