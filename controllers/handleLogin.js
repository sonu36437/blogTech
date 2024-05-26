const bcrypt= require('bcrypt')
const { userModel } = require("../model/user");


async function handleLogin(req,res){
    const {email,password}=req.body
    if(!email || !password) return res.json({message:"All fields are required"})
    try {
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            throw new Error("User not found");
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        res.json({
            message:`Login successful for ${existingUser.fullName}`,
            user: {
                id: existingUser._id,
                fullName: existingUser.fullName,
                email: existingUser.email,
            }
        });
    } catch (e) {
        console.error("Error during login:", e);
        res.status(500).send(e.message);
    }
}
module.exports=handleLogin;