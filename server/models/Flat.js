import { Schema, model } from "mongoose";

const flatSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: String,
      required: true,
    },
    bathrooms: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    amenities: {
      type: String,
      enun: [parking, pool, gym],
    },
    images: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Flat = model("Flat", flatSchema);

export default Flat;