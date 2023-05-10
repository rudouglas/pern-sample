const newrelic = require("newrelic");
const express = require("express");
const cors = require("cors");
const https = require("https");

const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));

// var corsOptions = {
//   origin: "https://0.0.0.0:8081"
// };

app.use(cors());
// app.use(express.static(path));// const bodyParser = require("body-parser"); /* deprecated */

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
https
  .createServer(app)
  .listen(4000, ()=>{
    console.log('server is runing at port 4000')
  });
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
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
