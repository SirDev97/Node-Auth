const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter and email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter and password"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
