import Booking from "../models/Booking.js"
import Flat from "../models/Flat.js"


const postBooking = async (req, res) => {
    const {
        userId,
        faltId,
        startDate,
        endDate,
        totalPrice,
        status
    } = req.body

    const booking = new Booking({
        userId,
        faltId,
        startDate,
        endDate,
        totalPrice,
        status
    })

    try {
        const savedBooking = await booking.save();
        return res.json({
            success: true,
            message: 'Booking a Beautiful Flat',
            data: savedBooking,
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

const getBooking = async (req, res) => {
    const { faltId } = req.query;

    const flat = await Flat.findById(faltId)

    if (!flat) {
        return res.json({
            success: false,
            message: `Flat Not Found`,
            data: null
        })
    }
    res.json({
        success: true,
        message: `Flat Found is Successfully`,
        data: flat
    })
}

const getBookings = async (req, res) => {
    const allBookings = await Flat.find();
    try {
        res.json({
            success: true,
            message: "All Flat Loading  successfully",
            data: allBookings
        })
    }
    catch {
        res.json({
            success: false,
            message: "Invalide",
            data: null
        })
    }
}

const putBooking = async (req, res) => {
    const { _id } = req.query

    const {
        userId,
        faltId,
        startDate,
        endDate,
        totalPrice,
        status
    } = req.body;

    const booking = await Booking.updateOne({ _id: _id }, {
        $set: {
            userId: userId,
            faltId: faltId,
            startDate: startDate,
            endDate: endDate,
            totalPrice: totalPrice,
            status: status
        }
    })
    res.json({
        success: true,
        message: 'Flat updated successsfully',
        data: booking
    })
}
const deleteBooking = async (req, res) => {
    const { _id } = req.query;
    const data = await Booking.deleteOne({ _id: _id })
    res.json({
        success: true,
        message: "Booking delete succesfully",
        data: data
    })
}


export {
    postBooking,
    getBooking,
    getBookings,
    putBooking,
    deleteBooking
}