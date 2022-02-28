"use strict";

require("dotenv").config();

var jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    var token = req.headers.authorization.split(" ")[1];
    console.log("token :", token);
    var decodedToken = jwt.verify(token, process.env.RND_TKN);
    console.log("decodedToken depuis auth :", decodedToken);
    var userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      throw "Utilisateur non-reconnu !";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: error || "Requête non authentifiée !"
    });
  }
};