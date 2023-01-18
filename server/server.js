var express = require("express");
var app = express();
require("dotenv").config();
const cors = require("cors");

app.use(
  cors({ origin: process.env.ORIGIN, credentials: process.env.CREDENTIALS })
);

app.use(express.json());

app.post("/hello", async function (req, res) {
  let passedInToggleValue = false
  if (req.body === null || req.body === undefined) {
    console.log("body is empty");
  }
  else if (!req.body.hasOwnProperty('switchBool')) {
    console.log("switchBool is empty");
  }
  else if (req.body.switchBool) {
    passedInToggleValue = true
  }

  const toggleValue = passedInToggleValue ? "on" : "off";
  const resData = `this backend is running and the Testing On/Off Switch is ${toggleValue}`;
  res.send(resData);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://localhost:", port);
});
