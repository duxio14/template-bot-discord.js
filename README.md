# Template Bot Discord.js

![Discord.js](https://img.shields.io/badge/Discord.js-v14.8.0-blue.svg)
![Downloads](https://img.shields.io/npm/dt/discord.js.svg)
![Stars](https://img.shields.io/github/stars/duxio14/template-bot-discord.js.svg)

Template de bot Discord.js très pratique.

## Cloner le repository

Vous pouvez cloner ce repository en utilisant la commande suivante :

```bash
git clone https://github.com/duxio14/template-bot-discord.js.git
```

## Installer les packages

Une fois que vous avez cloné le repository, accédez au dossier cloné en utilisant la commande suivante :
```bash
cd template-bot-discord.js
```


Ensuite, installez les packages requis avec la commande suivante :
```bash
npm i
```


## Configurer les paramètres

Avant de démarrer le bot, renommez le fichier example.env en .env et configurer les paramètres dans le fichier `.env`. 

```dotenv
TOKEN= token du bot
COLOR= La couleur des embeds
```

## Paramètres de la base de donées

```json
{
    "database": {
        "host": "", // localhost
        "username": "", // root
        "password": "",
        "databaseName": "",
        "port": 3306,
        "dialect": "", // mysql
        "databaseLogs": false
    }
}
```

## Démarrer le bot

Enfin, pour démarrer le bot, exécutez la commande suivante :
```bash
node index
```

ou 
```bash
node .
```

## Exemples de commandes

Une commande pour répondre à un message de salutation :

```js
const { EmbedBuilder } = require('discord.js');

module.exports = {

  name: 'hello',
  description: 'Répondre à un message de salutation',
  ownerOnly: false,
  userPerms: ["SendMessages"],
  botPerms: ["SendMessages"],

  execute(interaction, client) {

    const embed = new EmbedBuilder()
      .setTitle('Hello')
      .setDescription(`Bonjour ${interaction.user}! Comment allez-vous ?`)
      .setColor(client.color);

    interaction.reply({embeds: [embed]});
  },
};
```
 ## À propos de moi
- Discord : duxio#5335
- Nationalité : FR
- 04/2023
