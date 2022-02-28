"use strict";

var express = require("express");

var app = express();

var bodyParser = require("body-parser");

var cors = require("cors");

var helmet = require("helmet");

var path = require("path");

var auth = require("./middleware/auth");

var authRoutes = require("./routes/auth");

var userRoutes = require("./routes/user");

var messageRoutes = require("./routes/message");

var commentRoutes = require("./routes/comment"); //const isOwner = require("./middleware/isOwner")


app.use(helmet()); //it enables CORS (cross-origin resource sharing). In order for your server to be accessible by other origins (domains)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var db = require("./models");

db.sequelize.sync();

require("./controllers/admin"); // la fonction pour créer l'admin dans la bdd


app.use("/images", express["static"](path.join(__dirname, "images")));
app.use("/api/auth", authRoutes);
app.use("/api/users", auth, userRoutes);
app.use("/api/messages", auth, messageRoutes);
app.use("/api/comments", auth, commentRoutes);
module.exports = app;