import React from "react";
import { Schema, model } from "mongoose";

const newBooking = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    faltId: {
      type: String,
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
