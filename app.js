const express = require("express");
const cors = require("cors");
const { attendanceRoutes, contactRoutes, eventRoutes } = require("./routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/events", eventRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/attendance", attendanceRoutes);
app.get("/", (_, res) => {
    res.json({
        message: "EventSpark API is running 🚀",
        version: "1.0.0",
    });
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
});

module.exports = app;