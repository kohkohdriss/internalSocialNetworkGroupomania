require("dotenv").config();
const models = require("../models")
const Message = models.messages
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  const decodedToken = jwt.verify(token, process.env.RND_TKN)
  const userId = decodedToken.userId   
  Message.findOne({ where: { id: req.params.id }})  
  .then((message) => {
      const userCreatMessage = message.dataValues.UserId;     
 if(userCreatMessage !== userId && userId!==1 ){
  res.status(403).json({
      error: "Vous n'êtes pas autorisés, ni à supprmier ni à modifier!",
    });
   } else {
      next();
    }
  })
  .catch((error) =>
    res.status(400).json({
      error,
    })
  );
};






