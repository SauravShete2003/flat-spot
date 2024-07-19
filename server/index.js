import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv, { config } from "dotenv";
dotenv.config();

import { postLogin, postSignup } from "./controllers/user.js";
import {
  getOwner,
  postOwner,
  getOwnerFlats,
  deleteOwner,
  updateOwner
} from "./controllers/owner.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.post("/signup", postSignup);
app.post("/login", postLogin);
app.post("/owner", postOwner);
app.get("/owner", getOwner);
app.get("/owner/flats", getOwnerFlats);
app.delete("/owner", deleteOwner);
app.put('/owner',updateOwner)

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  if (conn) {
    console.log("MongoDB Connected✅");
  }
};
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
