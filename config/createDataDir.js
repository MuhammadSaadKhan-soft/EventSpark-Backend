const fs = require("fs");
const path = require("path");
const createDataDir = () => {
    const dataDir = path.join(__dirname, "../data");
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
};
module.exports = createDataDir;