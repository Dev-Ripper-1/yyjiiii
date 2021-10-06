/**@format */



const discord = require("discord.js");

 const config = require("./data/config.json");

const intents = new discord.Intents(32767);

const client = new discord.Client({ intents });

client.on("ready", () => console.log("Bot is onlline!!"));

client.login(config.token);

