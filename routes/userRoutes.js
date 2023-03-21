// const express = require("express");
// const {
//   loginController,
//   registerController,
// } = require("../controllers/userController");

// const router = express.Router();

// //route

// //get method

// router.post("/login", loginController);
// //post method

// router.post("/register", registerController);

// module.exports = router;

const express = require("express");
const {
  loginController,
  registerController,
} = require("./../controllers/userController");

const router = express.Router();

//routes
//Method - get
router.post("/login", loginController);

//MEthod - POST
router.post("/register", registerController);

module.exports = router;
