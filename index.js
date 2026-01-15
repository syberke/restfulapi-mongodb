require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());  // Middleware JSON

const PORT = process.env.PORT || 5000;

// Root test endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Router
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🌱 Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  });