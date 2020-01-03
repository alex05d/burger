
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// this allows static files to be used from the public folder
app.use(express.static("public"));

// parse application body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// variable for handelbars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//imports routes and gives the server access to them
var routes = require("./controllers/burgers_controller");
app.use(routes);


app.listen(PORT, function () {
    console.log("sever listening on: http://localhost:" + PORT);
});