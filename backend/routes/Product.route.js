const express = require("express");
const { verifyTokenAndAdmin } = require("../middleware/authenticate.mw");
const productRouter = express.Router();
const { ProductModel } = require("../models/Product.model");


//ADD PRODUCT
productRouter.post("/add",verifyTokenAndAdmin, async (req, res) => {
  const payload = req.body;
  console.log(payload)
  try {
    const product = new ProductModel(payload);
    await product.save();
    res.status(200).send({msg:"Added product successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});


//UPDATE
productRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ msg: "Product updated succeccfully", updatedProduct });
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET A SINGLE PRODUCT
productRouter.get("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
productRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category
 try {
   let products;

   if (qNew) {
     products = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
   } else if (qCategory) {
     products = await ProductModel.find({
       categories: {
         $in: [qCategory],
       },
     });
   } else {
     products = await ProductModel.find();
   }

   res.status(200).json(products);
 } catch (err) {
   res.status(500).json(err);
 }
});



module.exports = {
  productRouter,
};



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