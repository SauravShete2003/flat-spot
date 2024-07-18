import { Schema, model } from "mongoose";

const newPayment = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
    },
    bookingId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
    },
  },
  {
    timestamps: true,
  }
);
const Payment = model("Payment", newPayment);

export default Payment;
