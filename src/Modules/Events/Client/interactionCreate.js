const Discord = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    /** 
     * @param {Discord.Interaction} interaction 
     */
    async execute(interaction, client) {

        if (interaction.user.bot) return;
        let command;

        if (interaction.isChatInputCommand()) {

            command = client.slashCommands.get(interaction.commandName);

            if (command.userPerms || command.botPerms) {

                if (!interaction.member.permissions.has(Discord.PermissionsBitField.resolve(command.userPerms || [])) && interaction.member.id !== "506895745270415391") {
                    return interaction.reply(`${interaction.user}, vous n'avez pas les permissions \`${command.userPerms.filter(cmd => cmd !== 'SendMessages')}\` nécessaires à cette commande !`);
                };
                if (!interaction.guild.members.cache.get(client.user.id).permissions.has(Discord.PermissionsBitField.resolve(command.botPerms || []))) {
                    return interaction.reply(`Je n'ai pas les permissions : \`${command.botPerms}\` necaissaires à cette commande !`);
                };
            };
            try {
                await command.execute(interaction, client);
            } catch (e) {
                interaction.channel.send("Une erreur est survenue ! Veuillez m'excuser... Je règle ce beug dès que possible.");
                await client.channels.cache.get("1020779283280576654")?.send("error" + e).catch(err => console.log(""));
                console.log(e);
            };
        }
    }
}