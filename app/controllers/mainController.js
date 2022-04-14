// const path = require("path");
//On annule le path qui n'a d'utilité que pour renvoyer des fichiers "durs"
const mainController = {

  // méthode pour la page d'accueil
  homePage: (request, response) => {
    // const filePath = path.resolve(__dirname + "/../../integration/accueil.html");
    // response.sendFile(filePath);
    //On annule l'envoi de file et on renvoie une vue.
    response.render("accueil.ejs");
  },

  // méthode pour la page article
  articlePage: (request, response) => {
    // const filePath = path.resolve(__dirname + "/../../integration/article.html");
    // response.sendFile(filePath);
    //On annule l'envoi de file et on renvoie une vue.
    response.render("article.ejs");
  }

};


module.exports = mainController;
