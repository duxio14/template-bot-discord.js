
const {Games} = require("./Models/Games");
const logger = require("../Libs/logger");

module.exports = () => {
    // sync la table Games
    Games.sync();
    logger.print("La base de donnée est bien connectée !").success();
}

