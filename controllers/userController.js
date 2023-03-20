const userModel = require("../models/userModel");
import { message } from 'antd';
//login user
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.findOne({ userId, password, verified: true });
    // res.status(200).send("Login Successfull!");

    if (user){
      res.status(200).send(user);
    }else{
      res.json({
        message:"Login failed!", user
      })
    }
  } catch (err) {
    console.log(err);
  }
};
//register user
const registerController = async (req, res) => {
  try {
    const newUser = new userModel({...req.body, verified: true});
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (err) {
    res.status(400).send("err", err);
    console.log(err);
  }
};

module.exports = { loginController, registerController };
