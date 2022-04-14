// const path = require("path");
//On annule le path car pas d'utilité ici.
const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    // const filePath = path.resolve(__dirname + "/../../integration/favoris.html");
    // response.sendFile(filePath);
    //On annule le SendFile et on rend une view.
    response.render("favoris.ejs");
  }

};


module.exports = bookmarksController;
