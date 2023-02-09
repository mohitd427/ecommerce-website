const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/authenticate.mw");
require("dotenv").config();

userRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const users = await UserModel.find(query);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send({ err: "Oop's Something went wrong" });
  }
});

userRouter.post("/register", async (req, res) => {
  const { email, password, username } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) return res.status(400).json({ msg: "The user already exists." });

  try {
    bcrypt.hash(
      password,
      5,
      async (err, secure_password) => {
        // Store hash in your password DB.
        if (err) {
          console.log(err);
        } else {
          const user = new UserModel({
            username,
            email,
            password: secure_password,
          });
          await user.save();
          res.status(201).send("Registered Successfully");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: "Something went Wrong in Registration" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(400).json({ err: "User does not exist." });
    console.log(user,'in register')
    const hashed_pass = user.password;
   
    bcrypt.compare(password, hashed_pass, (err, result) => {
        // result == true
        if (result) {
          var accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin
          }, process.env.jwtKey,{expiresIn:"3d"});
          res.send({ msg: "Login Successfull",user, token: accessToken });
        } else {
          res.send({err:"Wrong Credentials"});
        }
      });
    
    console.log(user,'in login');
  } catch (err) {
    console.log(err);
    res.send({ err: "Something went Wrong while Logging in" });
  }
});


//UPDATE
userRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(password,5)
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({msg:"User updated succeccfully",updatedUser});
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
userRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
userRouter.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
userRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER STATS

userRouter.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  userRouter,
};
