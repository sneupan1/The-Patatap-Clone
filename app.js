var express = require("express");
var app = express();

app.use(express.static("assets"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.get("*", function(req, res){
	res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP);