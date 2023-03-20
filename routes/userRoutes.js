const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

const router = express.Router();

//route

//get method

router.post("/login", loginController);
//post method

router.post("/register", registerController);

module.exports = router;
