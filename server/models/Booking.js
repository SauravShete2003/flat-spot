import { Schema, model } from "mongoose";

const newBooking = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    faltId: {
      type: Schema.Types.ObjectId,
      ref: "Falt",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending"
    },
  },
  {
    timestamps: true,
  }
);

const Booking = model("Booking", newBooking);

export default Booking;
