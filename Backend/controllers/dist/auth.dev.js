"use strict";

require("dotenv").config();

var db = require("../models");

var User = db.users;

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken"); // Creation d'un nouvel utilisateur


exports.signup = function (req, res, next) {
  console.log("USER");
  console.log(User.length);
  /***** */
  // if (User.length === 0) {
  //     bcrypt.hash(process.env.Admin_password, 5)
  //     .then(hash => {
  //         const user = new User({
  //             id: 1,
  //             userName: process.env.Admin_userName,
  //             email: process.env.Admin_email,
  //             password: hash,
  //             avatar: `${req.protocol}://${req.get("host")}/images/${process.env.Admin_avatar}`,
  //             isAdmin: true,
  //             isActive: true
  //         })
  //         user.save()
  //     })}

  /***** */

  bcrypt.hash(req.body.password, 10).then(function (hash) {
    var user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash
    });
    user.save().then(function () {
      return res.status(201).json({
        message: "Utilisateur créé !"
      });
    })["catch"](function (error) {
      return res.status(401).json({
        error: error
      });
    });
  })["catch"](function (error) {
    return res.status(500).json({
      error: error
    });
  });
}; // Connexion d'un utilisateur


exports.login = function (req, res, next) {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    if (user.isActive === false) {
      return res.status(403).json({
        error: "Utilisateur supprimé !"
      });
    }

    if (!user) {
      return res.status(404).json({
        error: "Utilisateur non trouvé !"
      });
    }

    bcrypt.compare(req.body.password, user.password).then(function (valid) {
      if (!valid) {
        return res.status(401).json({
          error: "Mot de passe incorrect !"
        });
      }

      res.status(200).json({
        message: "Utilisateur connecté !",
        userId: user.id,
        role: user.isAdmin,
        userName: user.userName,
        avatar: user.avatar,
        token: jwt.sign({
          userId: user.id
        }, process.env.RND_TKN, {
          expiresIn: '1000h'
        })
      }); //console.log("userId depuis le login", user.dataValues.id);
    })["catch"](function (error) {
      return res.status(501).json({
        error: error
      });
    });
  })["catch"](function (error) {
    return res.status(502).json({
      error: error
    });
  });
};