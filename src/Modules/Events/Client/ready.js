const logger = require("../../../Libs/logger");

module.exports = {
    name: 'ready',
    /**
     * @param {Discord.Interaction} interaction 
     */
    async execute(client) {
        try {
            await client.application.commands.set(client.slashCommands.map((cmd) => cmd));
            logger.print(`Connecté en tant que %s`, 'Discord').success(client.user.tag);
            logger.print(`Lien d'invitation du bot : https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot`).success();
        } catch (err) {
            logger.print('Erreur lors de la définition des commandes Slash').error(err);
        }
    }
}