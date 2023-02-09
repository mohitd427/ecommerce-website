const express = require("express");
const {
  verifyTokenAndAdmin,
  authenticate,
  verifyTokenAndAuthorization,
} = require("../middleware/authenticate.mw");
const orderRouter = express.Router();
const { OrderModel } = require("../models/Order.model");

//ADD PRODUCT
orderRouter.post("/", authenticate, async (req, res) => {
  // const payload = req.body;

  const newOrder = new OrderModel(req.body);
  console.log(newOrder);
  try {
    const savedOrder = await newOrder.save();
    res
      .status(200)
      .send({ msg: "Added product to cart successfully", savedOrder });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

//UPDATE
orderRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ msg: "Order updated succeccfully", updatedOrder });
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
orderRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER Order
orderRouter.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL oders
orderRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET MONTHLY INCOME

orderRouter.get("/income", verifyTokenAndAdmin, async (req, res) => {
  //   const productId = req.query.pid;

  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {  console.log("hi from income");
    const income = await OrderModel.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          //   ...(productId && {
          //     products: { $elemMatch: { productId } },
          //   }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    console.log(income, "in income");
    res.status(200).send(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  orderRouter,
};
