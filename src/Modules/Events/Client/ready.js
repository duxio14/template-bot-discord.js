const logger = require("../../../Libs/logger");

module.exports = {
    name: 'ready',
    /**
     * Emitted when the client is ready
     * @param {Discord.Client} client 
     */
    execute(client) {
        try {
            client.application.commands.set(client.slashCommands);
            logger.print(`Connecté en tant que %s`, 'Discord').success(client.user.tag);
            logger.print(`Lien d'invitation du bot : https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot`).success();
        } catch (err) {
            logger.print('Erreur lors de la définition des commandes Slash').error(err);
        }
    }
}