const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ ${member}  ] مرححبآ
حياك الله في سيرفرنا فيه قيف اواي ع نيترو وحسابات نيتفليكس
وعندنا تحويل من سوا لباي بال باسعار منافسه و سيرفرات العاب

https://discord.gg/AqFvJd2 ححتنورنآ
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ ${member}  ] مرححبآ
حياك الله في سيرفرنا فيه قيف اواي ع نيترو وحسابات نيتفليكس
وعندنا تحويل من سوا لباي بال باسعار منافسه و سيرفرات العاب

https://discord.gg/AqFvJd2 ححتنورنآ
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
