const newrelic = require("newrelic");
const express = require("express");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// parse requests of content-type - application/x-www-form-urlencoded

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
// app.get("/", (req, res) => {
//   newrelic.recordLogEvent({
//     message: "cannot find file",
//     level: "ERROR",
//     error: new Error("missing.txt"),
//   });
//   newrelic.recordLogEvent({
//     message: "cannot find file",
//     level: "INFO",
//     error: new Error("missing.txt"),
//   });
//   newrelic.recordLogEvent({
//     message: "cannot find file",
//     level: "WARNING",
//     error: new Error("missing.txt"),
//   });
//   res.json({ message: "Welcome to bezkoder application." });
// });

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
console.log({PORT})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
