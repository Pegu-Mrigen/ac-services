const billsModel = require("../models/billsModel");

//add bills
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill created successfully");
  } catch (err) {
    res.send("some err");
    console.log(err);
  }
};

module.exports = { addBillsController };
