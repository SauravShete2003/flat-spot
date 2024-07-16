import { Schema, Schema, model } from "mongoose";

const newReview = new Schema(
  {
    useId: {
      type:Schema.Types.ObjectId,
      ref : 'User',
      require: true
    },
    flatId: {
     type:Schema.Types.ObjectId,
     ref : 'Flat',
     require : true
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