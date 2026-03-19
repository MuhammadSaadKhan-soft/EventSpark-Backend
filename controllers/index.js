const attendanceController = require("./attendanceController");
const contactController = require("./contactController");
const eventController = require("./eventsController");

module.exports = {
    ...attendanceController,
    ...contactController,
    ...eventController,
};