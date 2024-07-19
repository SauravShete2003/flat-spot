import Owner from ".././models/Owner.js";
import { query } from "express";

const postOwner = (req, res) => {
  const { fullname, phone, address, email, flatsowned, profilePicture } =
    req.body;
  const newOwner = new Owner({
    fullname,
    phone,
    address,
    email,
    flatsowned,
    profilePicture,
  });
  try {
    newOwner.save();
    res.json({
      status: "success",
      data: newOwner,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};
const getOwner = async (req, res) => {
  const { ownerId } = req.query;
  console.log("id", ownerId);
  const owner = await Owner.findById(ownerId);
  if (!owner) {
    res.json({
      status: "error",
      message: "No owner found",
      data: null,
    });
  }

  res.json({
    status: "success",
    message: "Owner found successfully",
    data: owner,
  });
};

const getOwnerFlats = async (req, res) => {
  const { ownerId } = req.query;
  const owner = await Owner.findById(ownerId);
  if (!owner) {
    res.json({
      success: false,
      message: "Owner Flat Not Found",
      data: null,
    });
  }
  res.json({
    success: true,
    message: "Owner Flats Found Successfully",
    data: owner,
  });
};

const deleteOwner = async (req, res) => {
  const { ownerId } = req.query;
  const owner = await Owner.findByIdAndDelete(ownerId);
  if (!owner) {
    res.json({
      success: false,
      message: "Owner Not Found",
    });
  }
  res.json({
    success: true,
    message: "Owner Deleted Successfully",
    data: owner,
  });
};
const updateOwner = async (req, res) => {
  const { fullname, phone, address, email, flatsowned, profilePicture } =
    req.body;
  const { ownerId } = req.query;
  const owner = await Owner.findByIdAndUpdate(ownerId, {
    fullname,
    phone,
    address,
    email,
    flatsowned,
    profilePicture,
  });
  if (!owner) {
    res.json({
      success: false,
      message: "Owner Not Found",
    });
  }
  res.json({
    success: true,
    message: "Owner Updated Successfully",
    data: owner,
  });
};

export { postOwner, getOwner, getOwnerFlats, deleteOwner, updateOwner };
