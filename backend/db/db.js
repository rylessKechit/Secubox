const {connect} = require('mongoose');


    function dbConnexion(){
        connect('mongodb+srv://Sami:sami@cluster0.mhvdm.mongodb.net/Project0?retryWrites=true&w=majority')
        .then(() => console.log("Connexion à MongoDB réussie"))
        .catch(() => console.log('Connexion à MongoDB échouée'))
    }

module.exports = dbConnexion





