import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

// ========================================
// CORS CONFIGURATION
// ========================================
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shubham-ai-portfolio.vercel.app",
      "https://my-portfolio-jade-five-50.vercel.app",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ========================================
// BODY PARSER
// ========================================
app.use(express.json());

// ========================================
// HEALTH CHECK
// ========================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Shubham Portfolio AI Backend is running 🚀",
  });
});

// ========================================
// CHAT API
// ========================================
app.use("/api/chat", chatRoutes);

// ========================================
// START SERVER
// ========================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});