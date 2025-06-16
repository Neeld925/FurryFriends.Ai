const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve frontend files if you move them into a 'public' folder

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Smart Pet Collar server is running!");
});

// Example endpoint (replace or expand as needed)
app.post("/api/emotion", (req, res) => {
  const { data } = req.body;
  console.log("Received data:", data);
  res.json({ message: "Emotion processed successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});// Node.js Express server integrating MongoDB, Cohere, Claude, Weaviate
