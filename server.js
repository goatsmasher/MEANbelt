const express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	path = require("path"),
	session = require("express-session");

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(express.static(path.join(__dirname, "./client")))
	.use(express.static(path.join(__dirname, "./node_modules")))
	.use(session({
		secret: "black_belting",
		resave: true,
		saveUninitialized: true,
		cookie: { secure: false }
	}))

	.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
	.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
	.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));

require("./server/configs/mongoose.js");
require("./server/configs/routes.js")(app);

app.listen(8000, console.log("Server_Status: operational"), console.log("Port: 8000"));
