
import mongoose,{Schema} from "mongoose"
const S=new Schema({name:String,members:[{type:Schema.Types.ObjectId,ref:"User"}]},{timestamps:true})
export default mongoose.model("Group",S)
