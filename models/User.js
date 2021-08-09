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

// fire a function after doc saved to db
userSchema.post("remove", function (doc, next) {
  console.log("new user was created and saved", doc);
  next();
});

// fire a function before doc saved to db
userSchema.pre("save", function (next) {
  console.log("user in creation process ", this);
  next();
});
const User = mongoose.model("user", userSchema);

module.exports = User;
