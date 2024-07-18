import Payment from "../models/Payment.js";
import User from "../models/User.js";
import Booking from "../models/Booking.js";

const postPayment = async (req, res) => {
  const { userId, bookingId, amount, paymentStatus } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.json({
        success: false,
        message: "booking not found",
        data: null,
      });
    }

    const payment = new Payment({
      userId,
      bookingId,
      amount,
      paymentStatus,
    });

    const savedPayment = await payment.save();

    res.json({
      success: true,
      message: `Payment Successfull`,
      data: savedPayment,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
      data: null,
    });
  }
};

const getPayments = async (req, res) => {
  const { bookingId } = req.query;
  try {
    const payments = await Payment.find({ booking: bookingId }).sort({
      createdAt: -1,
    });

    if (!payments || payments.length === 0) {
      return res.json({
        success: false,
        message: "No payments found for this flat",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Payments fetched successfully",
      data: payments,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to fetch payments",
      error: error.message,
    });
  }
};

const getPayment = async (req, res) => {
  const { id } = req.params;

  const payment = await Payment.findById(id);

  res.json({
    success: payment ? true : false,
    data: payment || null,
    message: payment ? "Payment fetched succesfully" : "Payment not found",
  });
};

const putPayment = async (req, res) => {
  const { id } = req.params;

  const { userId, bookingId, amount, paymentStatus } = req.body;

  const updateResult = await Payment.updateOne(
    { _id: id },
    {
      $set: {
        userId: userId,
        bookingId: bookingId,
        amount: amount,
        paymentStatus: paymentStatus,
      },
    }
  );

  const updatedPayment = await Payment.findById(id);

  res.json({
    success: true,
    message: "Payment updated successfully",
    data: updatedPayment,
  });
};

const deletePayment = async (req, res) => {
  const { id } = req.params;

  await Payment.deleteOne({ _id: id });

  res.json({
    success: true,
    message: "Payment deleted successfully",
    data: null,
  });
};

export { postPayment, getPayments, getPayment, putPayment, deletePayment };
