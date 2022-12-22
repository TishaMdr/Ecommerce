const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  updateProducts,
} = require("../controller/productController");

router.route("/").post(addProduct);
router.route("/").get(getAllProducts);
router.route("/:id").put(updateProducts);

module.exports = router;
