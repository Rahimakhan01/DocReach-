const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "doctor"], default: "user" }, // Use "user" or "doctor"
    specialty: { type: String, default: "" }, // Optional field for doctors
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);