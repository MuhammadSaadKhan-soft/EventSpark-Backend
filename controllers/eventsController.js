const events = require("../data/events.json");

const getEvents = (req, res) => {
    const { search, category } = req.query;
    let result = [...events];
    if (search) {
        const q = search.toLowerCase();

        result = result.filter(
            (e) =>
                e.name.toLowerCase().includes(q) ||
                e.location.toLowerCase().includes(q) ||
                e.category.toLowerCase().includes(q)
        );
    }
    if (category && category !== "All") {
        result = result.filter((e) => e.category === category);
    }
    res.json({
        success: true,
        count: result.length,
        data: result,
    });
};

const getEventById = (req, res) => {
    const event = events.find((e) => e.id === parseInt(req.params.id));
    if (!event) {
        return res
            .status(404)
            .json({ success: false, message: "Event not found" });
    }
    res.json({
        success: true,
        data: event,
    });
};

module.exports = {
    getEvents,
    getEventById,
};