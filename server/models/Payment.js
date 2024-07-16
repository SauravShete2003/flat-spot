import React from 'react'
import { Schema, model } from "mongoose"

const NewPayment = new Schema({
  userid: {
    type: String,
    required: true
  },
  bookingid: {
    type: String,
    required: true
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