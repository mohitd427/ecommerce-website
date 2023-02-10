// const { default: Stripe } = require("stripe");

const paymentRouter = require("express").Router();
require("dotenv").config()
const KEY = process.env.STRIPE_KEY;
    const stripe = require("stripe")(process.env.KEY);
   
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: 1099,
    //   currency: "inr",
    //   payment_method_types: [
    //     "bancontact",
    //     "card",
    //     "eps",
    //     "giropay",
    //     "ideal",
    //     "p24",
    //     "sepa_debit",
    //     "sofort",
    //   ],
    // });

paymentRouter.post("/", (req, res) => {

  const { tokenId, amount } = req.body;
      console.log(tokenId,amount)
      stripe.charges.create(
        {
          source: req.body.tokenId,
          amount: req.body.amount,
          currency: "INR",
        },
        (stripeErr, stripeRes) => {
          if (stripeErr) {
            res.status(500).json(stripeErr);
          } else {
            console.log(stripeRes,'stripeResponse')
            res.status(200).json(stripeRes);
          }
        }
      );
    });

    module.exports = paymentRouter;