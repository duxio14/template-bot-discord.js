const fs = require('fs');

/**
 * Handler of commands
 * @author duxio <github.me/duxio14>
 * @param {Discord.Client} client the client defined at the index
 */

module.exports = client => {

    const commandFolders = fs.readdirSync('./src/Modules/Commandes');

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./src/Modules/Commandes/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../../Modules/Commandes/${folder}/${file}`);
            client.slashCommands.set(command.name, command);
        };
    };
}