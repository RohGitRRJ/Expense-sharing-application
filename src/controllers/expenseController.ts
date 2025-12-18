
import Expense from "../models/Expense"
import Group from "../models/Group"
export const addExpense=async(req:any,res:any)=>res.json(await Expense.create(req.body))
export const groupExpenses=async(req:any,res:any)=>res.json(await Expense.find({group:req.params.id}))
