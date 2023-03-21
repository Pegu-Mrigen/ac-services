// const userModel = require("../models/userModel");
// import { message } from "antd";
// //login user
// const loginController = async (req, res) => {
//   try {
//     const { userId, password } = req.body;
//     const user = await userModel.findOne({ userId, password, verified: true });
//     // res.status(200).send("Login Successfullllll!");

//     if (user) {
//       res.status(200).send(user);
//     } else {
//       res.json({
//         message: "Login failed!",
//         user,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
// //register user
// const registerController = async (req, res) => {
//   try {
//     const newUser = new userModel({ ...req.body, verified: true });
//     await newUser.save();
//     res.status(201).send("User created successfully");
//   } catch (err) {
//     res.status(400).send("err", err);
//     console.log(err);
//   }
// };

// module.exports = { loginController, registerController };
const userModal = require("../models/userModel");

// login user
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModal.findOne({ userId, password, verified: true });
    if (user) {
      res.send(user);
    } else {
      res.json({
        message: "Login Fail",
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//register
const registerController = async (req, res) => {
  try {
    const newUser = new userModal({ ...req.body, verified: true });
    await newUser.save();
    res.status(201).send("new User added Successfully!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
