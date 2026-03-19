const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "../data/attendance.json");

const read = () => {
    if (!fs.existsSync(FILE)) {
        fs.writeFileSync(FILE, JSON.stringify([], null, 2));
    }
    return JSON.parse(fs.readFileSync(FILE, "utf-8"));
};

const write = (data) => {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};

const registerAttendance = (req, res) => {
    const { name, email, eventId, eventName } = req.body;

    if (!name?.trim() || !email?.trim() || !eventId || !eventName?.trim()) {
        return res
            .status(400)
            .json({ success: false, message: "All fields are required." });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return res
            .status(400)
            .json({ success: false, message: "Enter a valid email." });
    }

    const records = read();

    const duplicate = records.find(
        (r) =>
            r.email.toLowerCase() === email.toLowerCase() &&
            String(r.eventId) === String(eventId)
    );

    if (duplicate) {
        return res.status(409).json({
            success: false,
            message: "You are already registered for this event.",
        });
    }

    const entry = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        eventId: String(eventId),
        eventName: eventName.trim(),
        registeredAt: new Date().toISOString(),
    };

    records.push(entry);
    write(records);

    res.status(201).json({
        success: true,
        message: "Successfully registered!",
        data: entry,
    });
};

const getAllAttendance = (req, res) => {
    const records = read();
    res.json({ success: true, count: records.length, data: records });
};

const getAttendanceByEvent = (req, res) => {
    const records = read().filter(
        (r) => String(r.eventId) === req.params.eventId
    );

    res.json({ success: true, count: records.length, data: records });
};

module.exports = {
    registerAttendance,
    getAllAttendance,
    getAttendanceByEvent,
};