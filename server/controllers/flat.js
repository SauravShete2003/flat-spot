import Flat from "./../models/Flat.js"

const postflat = async (req, res) => {
    const { title, description, address, city, state, country, pincode, price, bedrooms, bathrooms, area, amenities, images, ownerId } = req.body;

    const flat = new Flat({
        title,
        description,
        address,
        city,
        state,
        country,
        pincode,
        price,
        bedrooms,
        bathrooms,
        area,
        amenities,
        images,
        ownerId
    })

    try {
        const savedFlat = await flat.save();
        res.json({
            success: true,
            message: "Flat is on rent available ",
            data: savedFlat
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

const getFlats = async (req, res) => {

    const allflat = await Flat.find();
    try {
        res.json({
            success: true,
            message: "Flat feched successfully",
            data: allflat
        })
    }
    catch {
        res.json({
            success: false,
            message: "Flat feched invalid",
            data: null
        })
    }

}

const getFlatid = async (req, res) => {
    const { _id } = req.query;
    const newflat = await Flat.findById(_id)
    if (!newflat) {
        res.json({
            success: false,
            message: `Flat Not Found`,
            data: null
        })
    }
    res.json({
        success: true,
        message: `Flat Found is Successfully`,
        data: newflat
    })
}

const putFlat = async (req, res) => {
    const { _id } = req.query;

    const {
        title,
        description,
        address,
        city,
        state,
        country,
        pincode,
        price,
        bedrooms,
        bathrooms,
        area,
        amenities,
        images,
        ownerId


    } = req.body;
    const flat = await Flat.updateOne({ _id: _id }, {
        $set: {
            title: title,
            description: description,
            address: address,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
            price: price,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            area: area,
            amenities: amenities,
            images: images,
            ownerId: ownerId
        }
    })
    res.json({
        success: true,
        message: 'Flat updated successsfully',
        data: flat
    })
}

const deletFlat = async (req, res) => {
    const { id } = req.query;
    const deletelFlat = await Flat.deleteOne({ _id: id })
    res.json({
        success: true,
        message: "flat delete succesfully",
        data: deletelFlat
    })
}





export {
    postflat,
    getFlats,
    getFlatid,
    putFlat,
    deletFlat
}