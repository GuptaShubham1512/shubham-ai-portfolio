import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

// ========================================
// CORS CONFIGURATION
// ========================================

const allowedOrigins = [
  "http://localhost:5173",
  "https://shubham-ai-portfolio.vercel.app",
  "https://my-portfolio-jade-five-50.vercel.app",
  "https://ai-portfolio6.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an Origin header
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS blocked origin:", origin);

      return callback(new Error("Not allowed by CORS"));
    },

    methods: ["GET", "POST", "OPTIONS"],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],

    credentials: false,
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
// 404 HANDLER
// ========================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

// ========================================
// ERROR HANDLER
// ========================================

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS origin not allowed",
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ========================================
// START SERVER
// ========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});