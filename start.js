// Discord.JS API Base
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

const pccsh_say = require("./msg/hello/msg.json");
let prefix ='จภ.สตูล';
// Status & Ready to services!
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('มาร์ช จภ.',{type:"LISTENING"});
 });

client.on('message', message => {
  if (message.content === prefix +' สวัสดี') {
    // Send "pong" to the same channel
    message.channel.send(pccsh_say.hello1);
  }
  if (message.content === prefix +' ขอเพลงมาร์ช') {
    message.channel.send({files:["./music/march/marsh.mp3"]});
  }
  if (message.content === 'สวัสดี จภ.สตูล') {
    // Send "pong" to the same channel
    message.channel.send(pccsh_say.hello1);
  }
  if (message.content === prefix + " ใจร้ายจัง"){
    message.reply(pccsh_say.not_evil)
  }
});
client.login(auth.token); // token auth
