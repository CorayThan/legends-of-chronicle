// Mongo
import {Server} from "mongodb";
import {Db} from "mongodb";


var server = new Server("localhost", 27017, {auto_reconnect: true});
var db = new Db("chronicledb", server, {w: 1});
db.open(null);

export = db;