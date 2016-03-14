import * as express from "express";
import * as bodyParser from "body-parser";
import * as errorHandler from "errorhandler";
import * as methodOverride from "method-override";
import * as cardRoutes from "./app/cards/card-routes";

var app = express();

// Configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../client"));

var env = process.env.NODE_ENV || "development";
if (env === "development") {
	app.use(errorHandler());
}

app.use("/cards", cardRoutes);

app.listen(3000, function(){
	console.log("legends of chronicle listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;