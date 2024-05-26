
const { userModel } = require("../model/user");
const bcrypt = require("bcrypt");
async function handleSignup(req, res) {
    console.log(req.body);
    const { fullName, email, password } = req.body;
    console.log(fullName);
    if (!fullName || !email || !password) return res.json({ message: "All fields are required" });
    try {

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("Email already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ fullName, email, password: hashedPassword });
        res.send(`Signup successful for ${newUser.fullName}`);
    } catch (e) {
        console.error("Error during signup:", e);
        res.status(500).send("Signup failed. Please try again later.");
    }
}
module.exports = handleSignup;