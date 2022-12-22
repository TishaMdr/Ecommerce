const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product name"],
    minLength: 2,
  },
  price: {
    type: Number,
    required: [true, "Please Enter product price"],
  },
  description: {
    type: String,
    required: [true, "Please Enter product description"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true, "Please Enter id"],
      },
      url: {
        type: String,
        required: [true, "Please Enter url"],
      },
    },
  ],
  noOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true, "Please Enter name"],
      },
      Comment: {
        type: String,
        required: [true, "Please Enter comment"],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Select a category"],
    enum: [
      "Electronics",
      "Clothes",
      "Food",
      "Smart phone",
      "Accessories",
      "Beauty",
      "Camera",
      "Headphones",
      "Home Appliances",
      "Laptop",
    ],
  },
});
module.exports = mongoose.model("Product", productSchema);
