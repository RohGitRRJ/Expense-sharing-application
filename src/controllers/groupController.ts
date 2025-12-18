
import Group from "../models/Group"
export const createGroup=async(req:any,res:any)=>res.json(await Group.create(req.body))
export const myGroups=async(req:any,res:any)=>res.json(await Group.find({members:req.user.id}))
