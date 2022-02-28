"use strict";

require("dotenv").config();

var models = require("../models");

var Message = models.messages;

var jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  var token = req.headers.authorization.split(" ")[1];
  var decodedToken = jwt.verify(token, process.env.RND_TKN);
  var userId = decodedToken.userId;
  Message.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (message) {
    //console.log("message depuis deltemessage", message);
    var userCreatMessage = message.dataValues.UserId;

    if (userCreatMessage !== userId && userId !== 1) {
      res.status(403).json({
        error: "Vous n'êtes pas autorisés, ni à supprmier ni à modifier!"
      });
    } else {
      console.log("vous êtes le créateur de cette sauce");
      next();
    }
  })["catch"](function (error) {
    return res.status(400).json({
      error: error
    });
  });
};