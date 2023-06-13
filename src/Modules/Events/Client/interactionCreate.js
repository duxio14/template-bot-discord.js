const Discord = require("discord.js");
const config = require("../../../../config.json");

/**
 * The base of all the interactions
 *
 * @author duxio <github.me/duxio14>
 * @param {Discord.Interaction} interaction
 * @param {Discord.Client} client the client defined at the index
 */

module.exports = {
    name: "interactionCreate",
    execute(interaction, client) {
        if (interaction.user.bot) return;

        if (!interaction.isChatInputCommand()) return;

        const command = client.slashCommands.get(interaction.commandName);

        if (
            !interaction.member.permissions.has(
                Discord.PermissionsBitField.resolve(command.userPerms || [])
            ) &&
            interaction.member.id !== "506895745270415391"
        ) {
            return interaction.reply(
                `${
            interaction.user
          }, vous n'avez pas les permissions \`${command.userPerms.filter(
            (cmd) => cmd !== "SendMessages"
          )}\` nécessaires à cette commande !`
            );
        }
        if (
            !interaction.guild.members.cache
            .get(client.user.id)
            .permissions.has(
                Discord.PermissionsBitField.resolve(command.botPerms || [])
            )
        ) {
            return interaction.reply(
                `Je n'ai pas les permissions : \`${command.botPerms}\` necaissaires à cette commande !`
            );
        }
        try {
            command.execute(interaction, client);
        } catch (e) {
            interaction.channel.send(
                "Une erreur est survenue ! Veuillez m'excuser... Je règle ce beug dès que possible."
            );
            const channel = client.channels.cache.get(config.logsChannelId);
            if (channel) channel.send("Une erreur est survenue : " + e);
            else console.log("Une erreur est survenue et aucun salon de logs d'erreur n'a été trouvé !");
            console.log(e);
        }
    },
};