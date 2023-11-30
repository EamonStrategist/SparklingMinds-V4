import mongoose from "mongoose";
import crypto from "crypto";
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: "Price is required",
  },
  category: {
    type: String,
  },
  coll: {
    type: String,
  },
  quantity: { type: String },
  imageURL: { type: String },
});

export default mongoose.model("Products", ProductSchema);
