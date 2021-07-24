/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
const auth = require('./auth.json');
const hello_pccshst = require("./msg/hello/msg.json");
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('มาร์ช จภ.',{type:"LISTENING"});
 });

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'สวัสดี จภ.สตูล') {
    // Send "pong" to the same channel
    message.channel.send(hello_pccshst.hello1);
  }
  if (message.content === 'จภ.สตูล ขอเพลงมาร์ช') {
    // Send "pong" to the same channel
    message.channel.send({files:["./music/march/marsh.mp3"]});
  }
});
client.login(auth.token);