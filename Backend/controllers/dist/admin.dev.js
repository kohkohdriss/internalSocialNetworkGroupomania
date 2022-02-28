"use strict";

require("dotenv").config();

var db = require("../models");

var User = db.users;

var bcrypt = require("bcrypt"); // Creation d'un nouvel utilisateur


function creatAdmin(req, res, next) {
  User.findOne({
    where: {
      email: "administrateur@groupomania.fr"
    }
  }).then(function (user) {
    //  console.log("user depuis l'admin", user);
    if (!user) {
      bcrypt.hash(process.env.Admin_password, 5).then(function (hash) {
        var user = new User({
          id: 1,
          userName: process.env.Admin_userName,
          email: process.env.Admin_email,
          password: hash,
          avatar: "".concat(req.protocol, "://").concat(req.get("host"), "/images/").concat(process.env.Admin_avatar),
          isAdmin: true,
          isActive: true
        });
        user.save().then(function () {
          return res.status(201).json({
            message: "Utilisateur créé !"
          });
        });
      });
    } else {
      console.log({
        message: "l'admin est déjà créé"
      });
    }
  })["catch"](function (error) {
    console.log({
      error: error
    });
  });
}

module.exports = creatAdmin(); ////////////////////////////////////////////
// const db = require("../models");
// const bcrypt = require("bcrypt");
// // Fonction qui crée le compte admin dans la base de données à la connexion s'il n'existe pas
// function setAdmin(req, res) {
//   db.User.findOne({ where: { email: "admin@mail.com" } || { pseudo: "admin" } })
//     .then((user) => {
//       if (!user) {
//         bcrypt
//           .hash("Moderator", 10)
//           .then((hash) => {
//             const admin = db.User.create({
//               pseudo: "admin",
//               email: "admin@mail.com",
//               password: hash,
//               admin: true,
//             })
//               .then((admin) => {
//                 console.log({
//                   admin,
//                   message: `Votre compte admin est bien créé ${admin.pseudo} !`,
//                 });
//               })
//               .catch((error) => {
//                 res.status(400).json({ error });
//               });
//           })
//           .catch((error) => {
//             res.status(500).send({ error });
//           });
//       } else {
//         console.log({ message: "l'admin est déjà créé" });
//       }
//     })
//     .catch((error) => {
//       console.log({ error });
//     });
// }
// module.exports = setAdmin();