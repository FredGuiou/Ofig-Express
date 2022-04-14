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

  // méthode pour la page article
  articlePage: async (request, response, next) => {
    //On crée une constante article qui appelle le paramètre de la route (ici id) de l'objet
    //On oublie pas de faire un parseInt pour "numériser" le résultat.
    const articleId = parseInt(request.params.id, 10);
    //On lance la methode dans laquelle on fait appel à getOneFigurine.
    try {
      const article = await dataMapper.getOneFigurine(articleId);
      //Si il trouve l'article alors il rend la vue de l'article correspondant
      if (article) {
        response.render('article', { article });
      } else {
        //Sinon il renvoie le message "la figurine n'existe pas"
        response.send("Cette figurine n'existe pas");
      }
    } catch (error) {
      //Si le try ne fonctionne pas alors il affiche "Il y a un problème"
      response.send("Il y a un problème");
    }
  }

};


module.exports = mainController;
