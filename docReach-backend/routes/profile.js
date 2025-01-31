const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/user");

// @route   GET /api/profile
// @desc    Get user profile
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT /api/profile
// @desc    Update user profile
// @access  Private
router.put("/", auth, async (req, res) => {
  const { name, email } = req.body;

  const profileFields = {};
  if (name) profileFields.name = name;
  if (email) profileFields.email = email;

  try {
    let user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: profileFields },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE /api/profile
// @desc    Delete user profile
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
