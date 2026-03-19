const express = require("express");
const router = express.Router();
const { getEvents, getEventById } = require("../controllers");
router.get("/", getEvents);
router.get("/:id", getEventById);

module.exports = router;