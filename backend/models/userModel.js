const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter name"],
    minLength: 2,
  },
  email: {
    type: String,
    required: [true, "Please Enter your email"],
  },

  profile_pic: {
    public_id: {
      type: String,
      default: "default.png",
    },
    url: {
      type: String,
      default: "default.png",
    },
  },
  password: {
    type: String,
    require: [true, "Please enter your password"],
    minLength: [8, "Password must be greater than 8 characters"],
  },
  role: {
    type: String,
    default: "user",
  },
});
module.exports = mongoose.model("Product", productSchema);
