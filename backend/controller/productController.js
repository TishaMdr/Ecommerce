const Product = require("../models/productModel");
const SearchSort = require("../utils/SearchSort");

//Add a products

exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({
      success: true,
      product: product,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const searchSort = new SearchSort(Product.find(), req.query);
    const count = await Product.count();
    const Products = await searchSort.search().filter().pagination(3).query;

    return res.status(200).json({
      message: "success",
      Products,
      count,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.updateProducts = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404).json({
      success: false,
    });
  }
  let updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
};

exports.removeProducts = async (req, res) => {
  const productId = req.params.id;
  const product = Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      success: false,
    });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "The Product is removed",
  });
};
