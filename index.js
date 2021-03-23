const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "TOKEN", //Discord Bot Token
  prefix: ["PREFIX"] //Change PREFIX to your Prefix
})

bot.onMessage()
//commands

bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})

bot.command({
name: "hello", //Command Name
code: `Hello <@$authorID>` //Code inside of ``
})

//status

bot.status({
  text: "Bot is running!",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Changed of Status!",
  type: "PLAYING",
  status: "idle",
  time: 12
})

//Read more information about status in docs:
//https://dbd.leref.ga/guide/bot-status

//variables

bot.variables({
    Name: "Value", 
    Name2: "Value2"
  })

//You can add more variables :)
//Join our Support Server & read Documentation for help :)
