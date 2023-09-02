const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },

    cartItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItem'
      }
    ],

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    ]
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
