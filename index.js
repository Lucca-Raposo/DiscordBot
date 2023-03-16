const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})


//Teste
function messageTest(message){
    return ('pong, ' + message.author.username)
    
}

//Inicializa o bot
client.on('ready', () => {
    console.log('The bot is ready')
})

//Responde mensagem 
client.on('messageCreate', message => {
    if (message.content === 'ping'){
        message.reply(messageTest(message))
    }
})

//Login do bot
client.login(process.env.TOKEN)
