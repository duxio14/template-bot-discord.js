const fs = require('fs');

/**
 * Handler of event
 * @author duxio <github.me/duxio14>
 * @param {Discord.Client} client the client defined at the index
 */

module.exports = client => {

    const eventFolders = fs.readdirSync('./src/Modules/Events');

    for (const folder of eventFolders) {
        const eventFiles = fs.readdirSync(`./src/Modules/Events/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`../../Modules/Events/${folder}/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        }
    }
}