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

// {
//     "name": "Apple iPhone 11",
//     "description": "The latest iPhone model with a dual-camera system, A13 Bionic chip, and Face ID.",
//     "price": 749.00,
//     "image": "https://www.example.com/products/iphone11.jpg",
//     "category": "Electronics",
//     "brand": "Apple",
//     "stock": 50,
//     "ratings": [4.5, 4.7, 4.2, 4.9, 5.0],
//     "reviews": [
//       "This is a great phone! It's fast, has a great camera, and the Face ID is super convenient.",
//       "I've been using this phone for a few months now and I'm very happy with it. The battery life is great, and the cameras are fantastic.",
//       "I was worried that this phone would be too big, but it's actually the perfect size. The screen is amazing and the cameras are top-notch."
//     ],
//     "isPrimeEligible": true
//   }