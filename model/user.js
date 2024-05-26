
const {Schema,model} =require('mongoose')
const userSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
       unique:true,
    },
  

    password:{
        type:String,
        required:true,
    },
 
    profileImageURL:{
        type:String,
        default:"/images/default.png"
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:"USER",
    }
  
},{timestamps:true})


const userModel=model('user',userSchema);
module.exports={userModel};
