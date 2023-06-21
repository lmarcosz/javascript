var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

hora == 1 ? console.log(`Agora é ${hora}:${minuto}`) : console.log(`Agora são ${hora}:${minuto}`)

if(hora < 12){
    console.log(`Bom dia!`)
} else if(hora <= 18){
    console.log(`Boa tarde!`)
} else{
    console.log(`Boa noite!`)
}