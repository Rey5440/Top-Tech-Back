require("dotenv").config();
const server = require("./src/app.js");
require("./src/DB/db.js");

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
