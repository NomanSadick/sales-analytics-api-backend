const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: "give an integer value for stock.",
      },
    },

    category: {
      type: String,
      required: true,
    },

    imageURL: {
        type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
