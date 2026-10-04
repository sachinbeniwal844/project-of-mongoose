import User from "../Models/User.js";
import Jwt from "jsonwebtoken";

//Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "user already exist......" });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    res.json({ message: "User signup.....", user });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user || user.password !== password){
        return res.json({message : "Invalid Credentials...."})
    }
    // for created token
    const token = Jwt.sign({
      userId:user._id
    }, process.env.JWT_SECRET )
    res.json({message : "User loggedIn",token})

   
  } catch (error) {
    res.json({ message: error.message });
  }
};
