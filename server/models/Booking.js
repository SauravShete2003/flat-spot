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
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
    },
  },
  {
    timestamps: true,
  }
);

const Booking = model("Booking", newBooking);

export default Booking;
