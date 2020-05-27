const Discord = require('discord.js');

const albatroz = new Discord.Client();

const token = "NzEzODE2MjM4ODE5OTAxNDgz.Xs55sw.Xm92NPrDktOridZqhapLAbJ2tV8";

albatroz.login(token)
albatroz.on('ready', () => {
    console.log('Estou pronto!')
})

albatroz.on('message', msg => {
    if (msg.content === 'Me Mostre Seus Comandos') {
        msg.reply('~~ESTÁ AÍ~~         **-Albatroz      -Albatroz do que você é capaz?    -Albatroz    -Albatroz do que você gosta?     -Albatroz você podia me passar o link pra eu chamar uma galera pro nosso Serv?       -Obrigado Albatroz       -Albatroz você conhece a Hcode ou a Hcode Lab?       -Albatroz, quais são Os Programadores que compõe a Equipe da Hcode?      -Todos são bem vindos?      Tu é engraçado moço!**')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Albatroz') {    
        msg.reply('Olá, do que precisa?')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Albatroz do que você é capaz?') {    
        msg.reply('De nada, só estou aqui para interagir com você e outros membros.')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Albatroz do que você gosta?') {    
        msg.reply('Cara meu Amor é o Abacate')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Albatroz você podia me passar o link pra eu chamar uma galera pro nosso Serv?') {    
        msg.reply('**Claro! Está aí**            https://discord.gg/W5tFBWf')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Obrigado Albatroz') {    
        msg.reply('Opa! Estou aqui pra o que precisar.')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Bom Dia!') {    
        msg.reply('Bom Dia!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Bom Dia a Todos!') {    
        msg.reply('Bom Dia!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Boa Tarde!') {    
        msg.reply('Boa Tarde!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Boa Tarde a Todos!') {    
        msg.reply('Boa Tarde!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Boa Noite!') {    
        msg.reply('Boa Noite!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Boa Noite a Todos!') {    
        msg.reply('Boa Noite!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Albatroz você conhece a Hcode ou a Hcode Lab?') {    
        msg.reply('Conheço Sim, a "Hcode" é um Grupo de Programadores e Professores de Programação das mais diversas áreas da Programação, e com todo esse conhecimento sobre Programação eles Criaram a "Hcode Lab", que é um laboratório de idéias sobre Programação para o ensinamento de "Web Starter" "Web Dev" e "React.js".')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Albatroz, quais são Os Programadores que compõe a Equipe da Hcode?') {    
        msg.reply('Seriam Eles, **Anthony Rafael, Gláucio Daniel, João Rangel, Djalma Sindeaux e Ronaldo Braz.**')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Oi') {    
        msg.reply('Oi, no que posso ajudar?')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Nada') {    
        msg.reply('Beleza🙁, de qualquer jeito estou SEMPRE aqui para o que precisar.')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Tchau') {    
        msg.reply('Tchau! Volte Sempre pois estou SEMPRE aqui, quer dizer QUASE sempre porque me deligam né!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Todos são bem vindos?') {    
        msg.reply('Claro! **Boas Vindas a Todos!**')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === 'Tu é engraçado moço!') {    
        msg.reply('Obrigado, sou criado com mais alta linha de divertimento para humanos!')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === '**~~BINARY-ACTIVED~~**') {    
        msg.reply('**00101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011010100101010011**')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === '**~~DESLIGAR-ALBATROZ~~**') {    
        msg.reply('**DESLIGANDO...**')
    }
})

albatroz.on('message', msg => { 
    if (msg.content === '**~~LIGAR-REI-ABACATE~~**') {    
        msg.reply('**LIGANDO...**')
    }
})

/* Como criar um comando de diálogo do Bot */

/* albatroz.on('message', msg => { 
    if (msg.content === 'Comando') {    
        msg.reply('Resposta do Bot')
    }
})
*/