
const User = require("../models/User");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const users = await User.create(userData);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
