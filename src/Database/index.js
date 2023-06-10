
const {Games} = require("./Models/Games");
const logger = require("../Libs/logger");

module.exports = async () => {
    // sync la table Games
    await Games.sync();
    logger.print("La base de donnée est bien connectée !").success();
}

