const Discord = require("discord.js");

var bot = new Discord.Client();

Bot.on("ready", function() {
    bot.user.setGame("Communiser les terres, !help");
    console.log ("Le bot est bien connecté");
});

bot.login("1IYYjgfco2iF228l0j4cGJJHmQrg8_V3");
