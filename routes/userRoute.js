const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Middleware for ID uniqueness validation
const validateIdUniqueness = async (req, res, next) => {
  const existingUser = await User.findOne({ id: req.body.id });
  if (existingUser) {
    return res.status(400).json({ error: "ID must be unique" });
  }
  next();
};

// Middleware for Age numeric and range validation
const validateAge = (req, res, next) => {
  const age = req.body.age;
  if (isNaN(age) || age < 1 || age > 100) {
    return res
      .status(400)
      .json({ error: "Age must be numeric and within the range of 1 to 150" });
  }
  next();
};

// Middleware for Full Name validation
const validateFullName = (req, res, next) => {
  const fullName = req.body.fullName;
  if (!fullName || fullName.trim() === "") {
    return res.status(400).json({ error: "Full Name is required" });
  }
  next();
};

// CRUD operations
router.get("/", getAllUsers);

router.post(
  "/",
  validateIdUniqueness,
  validateFullName,
  validateAge,
  createUser
);

router.put("/:id", validateFullName, validateAge, updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
