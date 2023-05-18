const newrelic = require("newrelic");
const express = require("express");
const path = require('path');

const cors = require("cors");

const app = express();
const buildPath = path.join(__dirname, '../client/build/');
app.use(express.static(buildPath));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/x-www-form-urlencoded

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  newrelic.recordLogEvent({
    message: "cannot find file",
    level: "ERROR",
    error: new Error("missing.txt"),
  });
  newrelic.recordLogEvent({
    message: "cannot find file",
    level: "INFO",
    error: new Error("missing.txt"),
  });
  newrelic.recordLogEvent({
    message: "cannot find file",
    level: "WARNING",
    error: new Error("missing.txt"),
  });
  res.sendFile(path + "index.html");
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
console.log({PORT})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
