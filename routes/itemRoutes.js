const express = require("express");
const {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
} = require("../controllers/itemController");

const router = express.Router();

//route

//get method

router.get("/get-item", getItemController);
//post method

router.post("/add-item", addItemController);
router.put("/edit-item", editItemController);
router.post("/delete-item", deleteItemController);

module.exports = router;
