
import mongoose,{Schema} from "mongoose"
const Split=new Schema({user:{type:Schema.Types.ObjectId,ref:"User"},amount:Number,percentage:Number,exactAmount:Number})
const S=new Schema({group:{type:Schema.Types.ObjectId,ref:"Group"},title:String,totalAmount:Number,paidBy:{type:Schema.Types.ObjectId,ref:"User"},splits:[Split],splitType:String},{timestamps:true})
export default mongoose.model("Expense",S)
