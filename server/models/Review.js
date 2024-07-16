import { Schema, Schema, model } from "mongoose";

const newReview = new Schema(
  {
    useId: {
      type:Schema.type.ObjectedId,
      ref : 'User'
    },
    flatId: {
     type:Schema.type.ObjectedId,
     ref : 'Flat'
    },
    rating: {
      type: Number,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Review = model('Review', newReview);
export default Review