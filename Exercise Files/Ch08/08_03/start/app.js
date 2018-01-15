var express = require("express");
var cors = require("cors");
var app = express();

var skierTerms = [{
		term: "Rip",
		defined: "Move at high speed"
	},
	{
		term: "Huck",
		defined: "something"
	},
	{
		term: "Chowder",
		defined: "asdf"
	},
];


app.use(function (req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));
app.use(cors());
app.get("/dictionary-api", function (req, res) {
	res.json(skierTerms);
})

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;