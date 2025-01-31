const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware.js");  // Ensure the middleware is correctly imported

// Protected route example
router.get("/", auth, async (req, res) => {
    try {
        res.json({ msg: "Welcome to the protected route", userId: req.user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server Error" });
    }
});

module.exports = router;
