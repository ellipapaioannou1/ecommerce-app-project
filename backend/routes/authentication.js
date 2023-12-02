import { Router } from "express";
import User from "../models/userModel.js";
const authenticationRouter = Router();

//Sign up
authenticationRouter.post("/register", async (req,res) => {
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,       
    });

    try{
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (err) {
       res.status(500).json(err);
    }
});
//Log in

authenticationRouter.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            // User not found
            return res.status(401).json({ message: 'Invalid username or password' });
          }
        if (user.password !== req.body.password) {
            // Passwords do not match
            return res.status(401).json({ message: 'Invalid username or password' });
          }
        res.status(200).json(user);
     } catch (err) {
       res.status(500).json(err);
    }
});

export default authenticationRouter;