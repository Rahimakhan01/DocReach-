const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";
const API_KEY = process.env.GOOGLE_GEMINI_API_KEY; // Use Google Gemini API key

router.post("/analyze-symptoms", async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.trim() === "") {
      return res.status(400).json({ error: "Please provide symptoms." });
    }

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: `Patient Symptoms: ${symptoms}. Provide a concise, evidence-based health suggestion or tip for managing common symptoms or minor health concerns in situations where immediate medical assistance is unavailable. Focus on practical, safe, and actionable advice that can help individuals temporarily alleviate discomfort or prevent worsening of symptoms until professional medical care can be accessed. Avoid diagnosing or recommending treatments for serious or life-threatening conditions.` }] }]
      }
    );

    const botReply = response.data.candidates[0]?.content?.parts[0]?.text || "I'm unable to respond at the moment.";

    res.json({ message: botReply });
  } catch (error) {
    console.error("Error fetching Google Gemini response:", error.response?.data || error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
