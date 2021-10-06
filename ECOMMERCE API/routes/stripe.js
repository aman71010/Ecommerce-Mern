import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
    console.log("partStripe1");
    console.log(req.body.tokenId); 
    console.log(req.body.amount);
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd"
        },
        (stripeErr, stripeRes) => {
            if(stripeErr){
                console.log("thisError");
                res.status(500).json(stripeErr);
            } else {
                console.log("partStipe 2");
                console.log("res send");
                console.log(stripeRes);
                res.status(200).json(stripeRes);
            }
        }
    );
});

export default router;