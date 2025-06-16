const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Example backend endpoint
app.post("/api/emotion", (req, res) => {
  const { emotion } = req.body;
  console.log("Received emotion:", emotion);
  res.json({ message: `Emotion '${emotion}' saved.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Smart Pet Collar server running on port ${PORT}`);
});
