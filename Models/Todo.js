import mongoose from "mongoose"

const todoschema = new mongoose.Schema({
    title:String,
    completed:{
        type:Boolean,
        default:false
    },
    //Authorization
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

export default mongoose.model("Todo",todoschema)