// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();

const express = require("express");

// on importe le router
const router = require("./app/router");

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

//On dit à express d'utiliser le moteur e views ejs
app.set("view engine", "ejs");
//On donne le chemin des views à ejs
app.set("views", `${__dirname}/app/views`);

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static("integration"));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
