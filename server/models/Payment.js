import React from 'react'
import { Schema, model } from "mongoose"

const NewPayment = new Schema({
  userid: {
    type:Schema.types.ObjectId,
    ref:"User"
  },
  bookingid: {
  type:Schema.types.ObjectId,
  ref:"User"
  },
  amount: {
    type: Number,
    required: true
  },
  paymentstatus: {
    type: String,
    enum:["pending, completed, failed"],
    default:"pending"
  }
},
  {
    timestamps: true,
  })
  const Payment = model("Payment",NewPayment)

export default Payment