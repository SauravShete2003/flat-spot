import { Schema, model } from "mongoose";
const NewOwner = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      default: "others",
    },
    flatsowned: [
      {
        type: Schema.Types.ObjectId,
        ref: "Flat",
      },
    ],
    profilePicture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Owner = model("Owner", NewOwner);

export default Owner;
