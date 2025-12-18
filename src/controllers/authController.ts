import User from "../models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req:any,res:any) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) return res.status(400).json({ error: "Missing fields" })
  const hash = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hash })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!)
  res.json({ token })
}

export const login = async (req:any,res:any) => {
  const { email, password } = req.body
  const user:any = await User.findOne({ email })
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ error: "Invalid credentials" })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!)
  res.json({ token })
}
