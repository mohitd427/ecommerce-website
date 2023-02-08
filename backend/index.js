const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.route")
const { productRouter } = require("./routes/Product.route")
const { authenticate } = require("./middleware/authenticate.mw");
const cors = require("cors");
const { config } = require("dotenv");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("WelCome To Zenith Zone");
});

app.use("/users", userRouter)
app.use(authenticate)
app.use("/products",productRouter)

app.listen(process.env.PORT || 8080 , async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("err : Something went Wrong Not connected to DB");
  }
  console.log("Running at Port 8080");
});
