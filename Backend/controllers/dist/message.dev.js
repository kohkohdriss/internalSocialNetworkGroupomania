"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var models = require("../models");

var Message = models.messages;
var Comment = models.comments;
var User = models.users;

var fs = require("fs");

var db = require("../models"); //////////////


require("dotenv").config();

var jwt = require("jsonwebtoken"); //////////////////
// Tous les messages


exports.findAllMessages = function (req, res, next) {
  Message.findAll({
    include: {
      model: User,
      required: true,
      attributes: ["userName", "avatar", "isActive"]
    },
    order: [["id", "DESC"]]
  }).then(function (messages) {
    var ListeMessages = messages.map(function (message) {
      return Object.assign({}, {
        id: message.id,
        createdAt: message.createdAt,
        message: message.message,
        messageUrl: message.messageUrl,
        UserId: message.UserId,
        userName: message.User.userName,
        avatar: message.User.avatar,
        isActive: message.User.isActive
      });
    });
    res.status(200).json({
      ListeMessages: ListeMessages
    });
  })["catch"](function (error) {
    return res.status(400).json({
      error: error
    });
  });
}; // Tous les messages d'un utilisateur


exports.findAllMessagesForOne = function (req, res, next) {
  Message.findAll({
    where: {
      UserId: req.params.id
    },
    include: {
      model: User,
      required: true,
      attributes: ["userName", "avatar", "isActive"]
    },
    order: [["id", "DESC"]]
  }).then(function (messages) {
    var ListeMessages = messages.map(function (message) {
      return Object.assign({}, {
        id: message.id,
        createdAt: message.createdAt,
        message: message.message,
        messageUrl: message.messageUrl,
        UserId: message.UserId,
        userName: message.User.userName,
        avatar: message.User.avatar,
        isActive: message.User.isActive
      });
    });
    res.status(200).json({
      ListeMessages: ListeMessages
    });
  })["catch"](function (error) {
    return res.status(400).json({
      error: error
    });
  });
}; // Un seul message


exports.findOneMessage = function (req, res, next) {
  var oneMessage = {};
  Message.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: User,
      required: true,
      attributes: ["userName", "avatar", "isActive"]
    }
  }).then(function (message) {
    oneMessage.id = message.id;
    oneMessage.userId = message.UserId;
    oneMessage.avatar = message.User.avatar;
    oneMessage.userName = message.User.userName;
    oneMessage.isActive = message.User.isActive;
    oneMessage.createdAt = message.createdAt;
    oneMessage.message = message.message;
    oneMessage.messageUrl = message.messageUrl;
  }).then(function () {
    Comment.count({
      where: {
        MessageId: req.params.id
      }
    }).then(function (commentCount) {
      oneMessage.commentaire = commentCount;
      res.status(200).json(oneMessage);
    });
  })["catch"](function (error) {
    return res.status(404).json({
      error: error
    });
  });
}; // Créer un message


exports.createMessage = function (req, res, next) {
  var varImage = "";

  if (req.file) {
    varImage = "".concat(req.protocol, "://").concat(req.get("host"), "/images/").concat(req.file.filename);
  }

  var message = new Message({
    UserId: req.body.UserId,
    message: req.body.message,
    messageUrl: varImage
  });
  message.save().then(function (retour) {
    return res.status(201).json({
      message: "Message créé !"
    });
  })["catch"](function (error) {
    return res.status(400).json({
      error: error
    });
  });
}; // Modifier un message


exports.modifyMessage = function (req, res, next) {
  var messageObject = req.file ? _objectSpread({}, req.body.message, {
    messageUrl: "".concat(req.protocol, "://").concat(req.get("host"), "/images/").concat(req.file.filename)
  }) : _objectSpread({}, req.body);
  Message.update(_objectSpread({}, messageObject, {
    id: req.params.id
  }), {
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.status(200).json({
      message: "Message modifié !"
    });
  })["catch"](function (error) {
    return res.status(400).json({
      error: error
    });
  });
}; // Supprimer un message


exports.deleteMessage = function (req, res, next) {
  Message.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (message) {
    var token = req.headers.authorization.split(" ")[1];
    var decodedToken = jwt.verify(token, process.env.RND_TKN);
    var filename = message.messageUrl.split("/images/")[1]; //unlink : fonction pour supprimer le fichier

    fs.unlink("images/".concat(filename), function () {
      //une fois l'image supprumer, on supprime l'objet de la BDD
      Message.destroy({
        where: {
          id: req.params.id
        }
      }).then(function () {
        return res.status(200).json({
          message: "Message supprimé !"
        });
      })["catch"](function (error) {
        return res.status(400).json({
          error: error
        });
      });
    });
  })["catch"](function (error) {
    return res.status(500).json({
      error: error
    });
  });
}; // exports.deleteMessage = (req, res, next) => {
//         const token = req.headers.authorization.split(" ")[1]
//         const decodedToken = jwt.verify(token, process.env.RND_TKN)
//         const userId = decodedToken.userId                                                                        
//         Message.findOne({ where: { id: req.params.id }})  
//         .then((message) => {
//             //console.log("message depuis deltemessage", message);
//             const userCreatMessage = message.dataValues.UserId;
//        if(userCreatMessage !== userId && userId!==1 ){
//         res.status(403).json({
//             error: "Vous n'êtes pas autorisés, ni à supprmier ni à modifier!",
//           });
//         } else {
//             const filename = message.messageUrl.split("/images/")[1];
//             //unlink : fonction pour supprimer le fichier
//             fs.unlink(`images/${filename}`, () => {
//               //une fois l'image supprumer, on supprime l'objet de la BDD
//                Message.destroy({ where: { id: req.params.id }})
//               .then(() => res.status(200).json({ message: "Message supprimé !" }))
//               .catch(error => res.status(400).json({ error }))
//           });
//           }     
//     })
//     .catch((error) => res.status(400).json({ error,})
//     );
// };