import mongoose, { model } from "mongoose";


const userSchema =mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email : {
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});
export default mongoose.model("users",userSchema);