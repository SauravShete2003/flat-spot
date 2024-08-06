import Review from "../models/Review.js";
import User from "../models/User.js";
import Flat from "../models/Flat.js";

const postReview = async (req, res) => {
  const { userId, flatId, rating, comment } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const flat = await Flat.findById(flatId);
    if (!flat) {
      return res.json({
        success: false,
        message: "Flat not found",
        data: null,
      });
    }

    const review = new Review({
      userId,
      flatId,
      rating,
      comment,
    });

    const savedReview = await review.save();

    res.json({
      success: true,
      message: `Review Successfull`,
      data: savedReview,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
      data: null,
    });
  }
};

const getReviews = async (req, res) => {
  const { flatId } = req.query;

  try {
    const reviews = await Review.find({ flat: flatId }).sort({ createdAt: -1 });

    if (!reviews || reviews.length === 0) {
      return res.json({
        success: false,
        message: "No reviews found for this flat",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
};

const getReview = async (req, res) => {
  const { id } = req.params;

  const review = await Review.findById(id);

  res.json({
    success: review ? true : false,
    data: review || null,
    message: review ? "review fetched succesfully" : "review not found",
  });
};

const putReview = async (req, res) => {
  const { id } = req.params;

  const { userId, flatId, rating, comment } = req.body;

  const updateResult = await Review.updateOne(
    { _id: id },
    {
      $set: {
        userId: userId,
        flatId: flatId,
        rating: rating,
        comment: comment,
      },
    }
  );

  const updatedReview = await Review.findById(id);

  res.json({
    success: true,
    message: "Review updated successfully",
    data: updatedReview,
  });
};

const deleteReview = async (req, res) => {
  const { id } = req.params;

  await Review.deleteOne({ _id: id });

  res.json({
    success: true,
    message: "Review deleted successfully",
    data: null,
  });
};

export { postReview, getReviews, getReview, putReview, deleteReview };
