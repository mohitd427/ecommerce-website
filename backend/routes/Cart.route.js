const express = require("express");
const {
  verifyTokenAndAdmin,
  authenticate,
  verifyTokenAndAuthorization,
} = require("../middleware/authenticate.mw");
const cartRouter = express.Router();
const { CartModel } = require("../models/Cart.model");

//ADD PRODUCT
cartRouter.post("/", authenticate, async (req, res) => {
    // const payload = req.body;
    // console.log(payload)
  const newCart = new CartModel(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).send({ msg: "Added product to cart successfully",savedCart });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

//UPDATE
cartRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ msg: "Cart updated succeccfully", updatedCart });
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
cartRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER CART
cartRouter.get("/:userId", async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CARTS
cartRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).send(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  cartRouter,
};
