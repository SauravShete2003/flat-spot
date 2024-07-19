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

export { postflat }