const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isDoctor: { type: Boolean, default: false }, // Determines if the user is a doctor or patient
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
