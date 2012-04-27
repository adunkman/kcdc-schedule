var express = require("express"),
    app = express.createServer(),
    csv = require("csv"),
    stylus = require("stylus"),
    scheduleFile = __dirname + "/data/schedule.csv",
    port = process.env.PORT || 8080;

app.set("view engine", "jade");

app.use(stylus.middleware({
  src: __dirname + "/public",
  dest: __dirname + "/public"
}));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  var events = [];

  csv()
    .fromPath(scheduleFile)
    .on("data", function (data) {
      events.push({
        start: data[0],
        end: data[1],
        room: data[2],
        title: data[3],
        speaker: data[4]
      });
    })
    .on("end", function () {
      res.render("index", { events: events });
    });
});

app.listen(port);
