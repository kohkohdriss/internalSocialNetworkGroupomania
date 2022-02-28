exports.checkPseudo = (req, res, next) => {
  // on vérifie le pseudo
  const regex = /^[a-zA-Z0-9_]{3,30}$/; // Lettres, espaces et doit être entre 4 et 30 caractères
  const userName = req.body.userName;
  if (regex.test(userName) === true) {
    next();
  } else {
    return res.status(400).send({
      error:
        "Votre pseudo doit être de 3 caractères minimum et 30 maximum, sont acceptées les lettres, chiffres et underscore (_)  ",
    });
  }
};

exports.validEmail = (req, res, next) => {
  // on vérifie le pseudo
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); // Lettres, espaces et doit être entre 4 et 30 caractères
 //const regex = new RegExp('[a-z0-9]+@groupomania.fr');
  const email = req.body.email;
  if (regex.test(email) === true) {
    next();
  } else {
    return res.status(400).send({
      error:
        "Votre email n'est pas bon, il doit être dans cette forme exemple@exemple.xy   ",
    });
  }
};

exports.validPassword = (req, res, next) => {
  // on vérifie le pseudo
 const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Lettres, espaces et doit être entre 4 et 30 caractères
 //const regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
  const password = req.body.password;
  if (regex.test(password) === true) {
    next();
  } else {
    console.log("Password, must have minimum eight characters, at least one letter and one number  ");
    return res.status(400).send({
      
      error:
        "Password, must have minimum eight characters, at least one letter and one number  ",
    });
    
  }
};
