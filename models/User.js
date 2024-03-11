const mongoose = require("mongoose");

const SchemaObject = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: 6,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: [true, "Please provide your age"],
    min: 1,
    max: 100,
  },
  city: {
    type: String,
    required: [true, "Please provide  your city"],
  },
};
const UserSchema = new mongoose.Schema(SchemaObject);

const model = mongoose.model("User", UserSchema);
module.exports = model;
