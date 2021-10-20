const Discord = require('discord.js');
const ytdl = require("ytdl-core");

const client = new Discord.Client();

const TOKEN = 'OTAwMTQyNjA4NTA3MDkzMDgy.YW9BIQ.XWe3ku4U-LGN3YiXskKeJRVWmGI'

const negao = "Negao"
const leo = "Leozin"
const ismael = "Ismael"
const biro = "Biro"
const kurt = "Kurt"

const ytdlOptions =  {
    filter: 'audioonly'
}

const prefix = '!';

const servidores = {
    'server': {
        connection: null,
        dispatcher: null
    },
    'server1': {
        connection: null,
        dispatcher: null
    },
}

client.on("ready", () => {
    console.log("Estou Online!");
})

client.on("message", async (msg) => {
    // filters

    if (!msg.guild) return;

    if (!msg.content.startsWith(prefix)) return;

    // comands no voice
    if (msg.content === prefix + 'top 5'){
        msg.reply(`Top 1 ${ismael}, Top 2 ${biro}, Top 3 ${kurt}, Top 4 ${leo}, Top 5 ${negao}`)
    }

    if (msg.content === prefix + "negao"){
        msg.channel.send("Negao puta")
    }

    if (msg.content === prefix + "max"){
        msg.channel.send("Max puta")
    }

    if (msg.content === prefix + "pedro"){
        msg.channel.send("Pedro puta")
    }
    if (msg.content === prefix + "Portifolio ismael"){
        msg.reply("Ismael mendes bueno")
        msg.reply("17 anos")
        msg.channel.send("https://portifolio-ismael.vercel.app/")
    }

    if (msg.content === prefix + "dhileri"){
        msg.reply("./assets/dhileri.png")
    }
    
    // verification in the voice
        if(msg.content === prefix + "join"){ // join
            try {
                msg.channel.send ("Entrando...")
                servidores.server.connection = await msg.member.voice.channel.join();
            }
            catch (err){
                console.log("erro ao entrar em um canal de voz");
                console.log(err);
            }
        }
    
        if (msg.content === prefix + "play dhileri"){ // play dhileri
            msg.reply("Tocando Dhileri")
            servidores.server.connection.play('./teste.mp3')
        }
    
        if (msg.content.startsWith(prefix + "play")){ // !play <url>
            let oQueTocar = msg.content.slice(6);
            if (ytdl.validateURL(oQueTocar)){
                msg.channel.send(`Tocando ${oQueTocar}`)
                servidores.server.dispatcher = servidores.server.connection.play(ytdl(oQueTocar, ytdlOptions));
            }else {
                msg.channel.send("Link invalido!");
            }
        }
    
        if(msg.content === prefix + "pause"){ // !pause
            msg.channel.send("Pausando")
            servidores.server.dispatcher.pause();
        }
    
        if(msg.content === prefix + "resume"){ // !resume
            msg.channel.send("Resumindo")
            servidores.server.dispatcher.resume();
        }

        if (msg.content === prefix + "leave"){
        msg.member.voice.channel.leave();
        msg.channel.send ("Saindo...")
        servidores.server.connection = null;
        servidores.server.dispatcher = null;
        }
})

client.login(TOKEN)
