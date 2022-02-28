"use strict";

require("dotenv").config();

var JWT = require("jsonwebtoken"); // module.exports = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(" ")[1]
//         const decodedToken = jwt.verify(token, process.env.RND_TKN)
//         const userId = decodedToken.userId
//         if (req.body.userId && req.body.userId !== userId) {
//             throw "Utilisateur non-reconnu !"
//         } else {
//             next()
//         }
//     } 
//     catch (error) {
//         res.status(401).json({ error: error || "Requête non authentifiée !" })
//     }
// }
//////////////////////////
// Connexion d'un utilisateur
// exports.login = (req, res, next) => {
//   User.findOne({where: { email: req.body.email }})
//   .then(user => {
//       if (user.isActive === false) { 
//           return res.status(403).json({ error: "Utilisateur supprimé !" })
//       }
//       if(!user) {
//           return res.status(404).json({ error: "Utilisateur non trouvé !" })
//       }
//       bcrypt.compare(req.body.password, user.password)
//       .then(valid => {
//           if(!valid) {
//               return res.status(401).json({ error: "Mot de passe incorrect !" })
//           }
//           res.status(200).json({
//               message: "Utilisateur connecté !",
//               userId: user.id,
//               role: user.isAdmin,
//               userName : user.userName,
//               avatar : user.avatar,
//               token: jwt.sign( { userId: user.id }, process.env.RND_TKN, { expiresIn: '1000h' } ),
//           })
//       })
//       .catch(error => res.status(501).json({ error }))
//   })
//   .catch(error => res.status(502).json({ error }))
// }
//////////////////////


function issueJWT(user) {
  // on génére le token
  var id = user.id;
  var expiresIn = "1000H";
  var payload = {
    sub: id,
    iat: Date.now()
  };
  var signedToken = JWT.sign(payload, process.env.RND_TKN, {
    expiresIn: expiresIn
  });
  return {
    token: "Bearer " + signedToken,
    expires: expiresIn
  };
}

function getUserId(req) {
  // on vérifie le userId du token
  var token = req.headers.authorization.split(" ")[1]; // on récupère le token de la requête entrante

  var decodedToken = JWT.verify(token, process.env.RND_TKN); // on le vérifie

  var userId = decodedToken.sub;
  console.log("userId depuis le token", userId);
  return userId; // on récupère l'id du token
}

module.exports.issueJWT = issueJWT;
module.exports.getUserId = getUserId; // exports.deleteMessage = async(req, res, next) => {
//   try {
//       const userId = token.getUserId(req);
//       console.log("userId delete message", userId);
//       const checkAdmin = await db.User.findOne({ where: { id: userId } });
//       const message = await db.Message.findOne({ where: { id: req.params.id } });
//       if (userId === message.UserId || checkAdmin.isAdmin === true) {
//           const filename = message.messageUrl.split("/images/")[1];
//     //unlink : fonction pour supprimer le fichier
//     fs.unlink(`images/${filename}`, () => {
//       //une fois l'image supprumer, on supprime l'objet de la BDD
//        Message.destroy({ where: { id: req.params.id }})
//   });
//     }else {
//       res.status(400).json({ message: "Vous n'avez pas les droits requis" });
//     }
//   } catch (error) {
//       return res.status(500).send({ error: "Erreur serveur" });
//     }
//   };