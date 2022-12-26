const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const decodedData = jwt.verify(taken, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
  } catch (e) {
    return res.status(500).json({
      succes: false,
      message: e.message,
    });
  }
};

exports.authorizedRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access Denied",
      });
    } else {
      next();
    }
  };
};
