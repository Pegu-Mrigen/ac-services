const billsModel = require("../models/billsModel");

//add bills
// const addBillsController = async (req, res) => {
//   try {
//     const newBill = new billsModel(req.body);
//     await newBill.save();
//     res.send("Bill created successfully");
//   } catch (err) {
//     res.send("some err");
//     console.log(err);
//   }
// };

const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
};


const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.status(200).send(bills);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addBillsController, getBillsController };
