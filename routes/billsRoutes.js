const express = require("express");
const {
  addBillsController,
  
} = require("../controllers/billsController");

const router = express.Router();


//post method

router.post("/add-bills", addBillsController);


module.exports = router;
