import { Schema, Schema, model } from "mongoose";

const newReview = new Schema(
  {
    useId: {
      type: String,
      required: true,
    },
    flatId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: "others",
    },
    comment: {
      type: String,
      default: "others",
    },
  },
  {
    timestamps: true,
  }
);
const Review = model('Review', newReview);
export default Review