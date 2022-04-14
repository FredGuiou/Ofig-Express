// const path = require("path");
//On annule le path qui n'a d'utilité que pour renvoyer des fichiers "durs"
//On require notre dataMapper dans une const (pensser au chemin ../ le cas échéant)
const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  homePage: async(request, response, next) => {
    //On lance la methode dans laquelle on fait appel à getAllFigurines.
    try {
      const figurine = await dataMapper.getAllFigurines();
      response.render('accueil.ejs', { figurine });
    } catch (error) {
      //Si il y a une erreur alors on affiche un message "Il y a un problème"
      response.send("Il y a un problème");
    }
  },
  // const filePath = path.resolve(__dirname + "/../../integration/accueil.html");
  // response.sendFile(filePath);
  //On annule l'envoi de file et on renvoie une vue.
  // response.render("accueil.ejs");

  // méthode pour la page article
  articlePage: (request, response) => {
    // const filePath = path.resolve(__dirname + "/../../integration/article.html");
    // response.sendFile(filePath);
    //On annule l'envoi de file et on renvoie une vue.
    response.render("article.ejs");
  }

};


module.exports = mainController;
