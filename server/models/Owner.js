import React from 'react'
import { Schema, model } from "mongoose"
const NewOwner = new Schema({
    fullName: {
        String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        default: "others"
    },
    flatsOwned: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    flatId: [
        {
        type: Schema.types.objecId,
        ref:"Flat"
    }
    ]

}, {
    timestamps: true,
})
const Owner = model("Owner", NewOwner)

export default Owner