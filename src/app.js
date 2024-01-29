const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");

const server = express();
server.name = "API";
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

server.use("/", routes);

module.exports = server;
