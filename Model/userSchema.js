const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  password: { type: String },
  conformpassword: { type: String },
});

const User = mongoose.model("ppl socer", userSchema);

module.exports = User;
