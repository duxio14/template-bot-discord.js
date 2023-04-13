
const Discord = require('discord.js');

module.exports = {

	name: "ping",
	description: "Affiche la latence du bot",
	ownerOnly: false,
	userPerms: ["SendMessages"],
	botPerms: ["SendMessages"],

	async execute(interaction, client) {
		await interaction.reply(`Pong !\n**J'ai un ping de** \`${client.ws.ping}ms\``);	
	},
};