/**@format */



const discord = require("discord.js");

 const config = require("./data/config.json");

const intents = new discord.Intents(32767);

const client = new discord.Client({ intents });

client.on("ready", () => console.log("Bot is onlline!!"));

client.on('message', message => {
  if (message.content === '+ping') {  
message.channel.send('pinging').then(m => {
    m.edit(`🏓Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  });
}
});

client.login(config.token);

