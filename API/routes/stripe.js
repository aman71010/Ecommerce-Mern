import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const KEY = process.env.STRIPE_KEY;

const stripe = new Stripe(KEY);

router.post("/payment", async (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            description:"shopping charges",
            amount: req.body.amount,
            currency: "inr"
        },
        (stripeErr, stripeRes) => {
            if(stripeErr){
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

export default router;