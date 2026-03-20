const fs = require("fs");
const path = require("path");

// const MESSAGES_FILE = path.join(__dirname, "../data/messages.json");
const FILE = path.join("/tmp", "messages.json");
const readMessages = () => {
    if (!fs.existsSync(MESSAGES_FILE)) {
        fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
    }
    return JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf-8"));
};

const writeMessages = (data) => {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(data, null, 2));
};

const createMessage = (req, res) => {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res
            .status(400)
            .json({ success: false, message: "All fields are required." });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return res
            .status(400)
            .json({ success: false, message: "Enter a valid email address." });
    }

    const messages = readMessages();

    const newMessage = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);
    writeMessages(messages);

    res.status(201).json({
        success: true,
        message: "Message received! We'll get back to you within 24 hours.",
        data: newMessage,
    });
};

const getMessages = (req, res) => {
    const messages = readMessages();
    res.json({
        success: true,
        count: messages.length,
        data: messages,
    });
};

module.exports = {
    createMessage,
    getMessages,
};