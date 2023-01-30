const express = require("express");
const productRouter = express.Router();
const { ProductModel } = require("../models/product.model");

productRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const products = await ProductModel.find(query);
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send({ err: "Oop's Something went wrong" });
  }
});

productRouter.post("/create", async (req, res) => {
  const payload = req.body;
  console.log(payload)
  try {
    const product = new ProductModel(payload);
    await product.save();
    res.send("Created the product");
  } catch (err) {
    console.log(err);
    res.send({ error: "Something went wrong" });
  }
});

productRouter.patch("/update/:id", async (req, res) => {
  const Id = req.params.id;
  const payload = req.body;
  const product = await ProductModel.findOne({ _id: Id });
  const userID_in_product = product.userID;
  const userID_making_req = req.body.userID;
  try {
    if (userID_making_req !== userID_in_product) {
      res.send({ msg: "You are not Authorised" });
    } else {
      await ProductModel.findByIdAndUpdate({ _id: Id }, payload);
      res.send(`The document with id:${Id} has been updated.`);
    }
    // console.log(book)
  } catch (err) {
    console.log(err);
    res.send({ err: "Oop's Something went wrong" });
  }
});

productRouter.delete("/delete/:id", async (req, res) => {
  const Id = req.params.id;
  const product = await ProductModel.findOne({ _id: Id });
  const userID_in_product = product.userID;
  const userID_making_req = req.body.userID;
  try {
    if (userID_making_req !== userID_in_product) {
      res.send({ msg: "You are not Authorised" });
    } else {
      await ProductModel.findByIdAndDelete({ _id: Id });
      res.send(`The document with id:${Id} has been updated.`);
    }
    // console.log(book)
  } catch (err) {
    console.log(err);
    res.send({ err: "Oop's Something went wrong" });
  }
});

module.exports = {
  productRouter,
};

// "title":"FE" ,
//  "product":"Today is the second day at crud app",
//  "category":"Live Session",
//  "author":"Sharukh"
