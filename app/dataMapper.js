//On appelle notre base de donnée (database.js) dans une constante.

const client = require("./database");

//On créé notre datamapper
const dataMapper = {
  //On crée une permière méthode (getAllFigurines) qui appelle une requête sql dans la Bdd.
  //On oublie pas que si la méthode est async, elle attend un await.
  getAllFigurines: async () => {
    const result = await client.query(`SELECT * FROM "figurine"`);

    return result.rows;
  },


  //On fait de même pour une seule figurine, en spécifiant en paramètre (id) qu'on souhaite l'id
  getOneFigurine: async (id) => {
    const result = await client.query(`SELECT * FROM "figurine" WHERE "id" = ${id}`);
    //On retourne le résultat avec [0] en paramètre car on attend une seule réponse.
    return result.rows[0];
  }

};

module.exports = dataMapper;