var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(session({
    secret: "black_belting",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));

require("./server/configs/mongoose.js");
require("./server/configs/routes.js")(app);

app.listen(8000, console.log("Server_Status: operational"), console.log("Port: 8000"));