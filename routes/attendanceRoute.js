const express = require("express");
const router = express.Router();
const {
  registerAttendance,
  getAllAttendance,
  getAttendanceByEvent,
} = require("../controllers");
router.post("/", registerAttendance);
router.get("/", getAllAttendance);
router.get("/:eventId", getAttendanceByEvent);

module.exports = router;