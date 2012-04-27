var express = require("express"),
    app = express.createServer(),
    csv = require("csv"),
    scheduleFile = __dirname + "/data/schedule.csv",
    port = 8080;

app.set("view engine", "jade");

app.get("/", function (req, res) {
  var events = [];

  csv()
    .fromPath(scheduleFile)
    .on("data", function (data) {
      events.push(data);
    })
    .on("end", function () {
      res.render("index", { events: events });
    });
});

app.listen(port);