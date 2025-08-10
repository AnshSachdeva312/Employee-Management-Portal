require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./Database/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// Connect to DB
connectDB();

const app = express();

// Serve static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS setup (change origin to your frontend URL after deployment)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/api/user", require("./Routes/userRoute"));
app.use("/api/announcements", require("./Routes/announcementRoutes"));
app.use("/api/meetings", require("./Routes/meetingRoutes"));
app.use("/api/tasks", require("./Routes/taskRoutes"));
app.use("/api/loans", require("./Routes/loanRoutes"));
app.use("/api/notice-periods", require("./Routes/noticeperiodRoutes"));

// Start server on Render's provided port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
