import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        produts: [
            {
                productId: {type: String},
                quantity: {type: Number, default: 1}
            }
        ],
        amount: {type: Number, required: true},
        address: { type: Object, required: true},
        status: { type: String, default: "pending"}
    },
    { timestamps: true }
);

const User = new mongoose.model("Order", orderSchema);
export default User;