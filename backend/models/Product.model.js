const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  ratings: [
    {
      type: Number,
      required: true,
    },
  ],
  reviews: [],
  isPrimeEligible: {
    type: Boolean,
    required: true,
  },
  userID: String,
});


const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
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