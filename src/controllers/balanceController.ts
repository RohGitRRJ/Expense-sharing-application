
import Expense from "../models/Expense"
import Group from "../models/Group"
import {simplify} from "../utils/simplifyBalances"
export const balances=async(req:any,res:any)=>{const g=await Group.findById(req.params.id);const e=await Expense.find({group:g!._id});const net:any={};g!.members.forEach((m:any)=>net[m]=0);e.forEach((x:any)=>{net[x.paidBy]+=x.totalAmount;x.splits.forEach((s:any)=>net[s.user]-=s.amount)});res.json(simplify(net))}
