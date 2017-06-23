'use strict';

var http = require("http"),
  pathUtils = require("path"),
  express = require("express"),
  app = express(),
  PORT = process.env.PORT || 5001,
  appDir = pathUtils.resolve(__dirname, "../dist");

app.use(express.static(appDir));

app.get("*", function (req, res) {
  res.sendfile(pathUtils.resolve(appDir, "index.html"));
});

http.createServer(app).listen(PORT, function () {
  console.log("Express server listening on port " + PORT);
  console.log("http://localhost:" + PORT);
});
