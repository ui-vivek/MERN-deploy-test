const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bCrpt = require("bcryptjs");
const cookie = require("cookie");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be 6 character long"],
  },
  userID: {
    type: String,
    default: "",
  },
  subscription: {
    type: String,
    default: "",
  },
});

//Hash password
UserSchema.pre("save", async function (next) {
  //update
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bCrpt.genSalt(10);
  const hashedPassword = await bCrpt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

//Match Password
UserSchema.methods.matchPassword = async function (password) {
  return await bCrpt.compare(password, this.password);
};

//Signed Tocken
UserSchema.methods.getSignedToken = function (res) {
  const accessToken = JWT.sign(
    { id: this._id },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRE_IN }
  );

  const refreshToken = JWT.sign(
    { id: this._id },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: process.env.JWT_REFRESH_EXPIRE_IN }
  );
  res.cookie("refreshToken", `${refreshToken}`, {
    maxAge: 86400 * 7000,
    httpOnly: true,
  });
};

const User = mongoose.model("User", UserSchema);

module.exports=User;