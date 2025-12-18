
import jwt from "jsonwebtoken"
export const auth=(req:any,res:any,next:any)=>{try{req.user=jwt.verify(req.headers.authorization.split(" ")[1],process.env.JWT_SECRET!);next()}catch{res.status(401).end()}}
