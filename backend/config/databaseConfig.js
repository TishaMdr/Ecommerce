const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

connectDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017", {})
    .then(() => {
      console.log("MongoDB is connected successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
