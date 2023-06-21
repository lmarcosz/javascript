var agora = new Date()
var diaSem = agora.getDay()

//Sun = 0; Mon = 1; Tue = 2; Wed = 3; Thu = 4; Fri = 5; Sat = 6.

switch(diaSem){
    case 0: 
        console.log(`Hoje é domingo!`) 
        break
    case 1: 
        console.log(`Hoje é segunda!`) 
        break
    case 2: 
        console.log(`Hoje é terça!`) 
        break
    case 3: 
        console.log(`Hoje é quarta!`) 
        break
    case 4: 
        console.log(`Hoje é quinta!`) 
        break
    case 5: 
        console.log(`Hoje é sexta!`) 
        break
    case 6: 
        console.log(`Hoje é sábado!`) 
        break
    default:
        console.log('Dia da semana indefinido')
}