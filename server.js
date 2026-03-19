const app = require("./app");
const createDataDir = require("./config/createDataDir");
createDataDir();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` EventSpark server → http://localhost:${PORT}`);
});