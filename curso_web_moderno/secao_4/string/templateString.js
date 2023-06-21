let nome = 'Liliana'
let concatenacao = 'Olá' + nome + '!'

//considera quebra de linha!
let template = `
    Olá
    ${nome}!` //${} -> interpolação  

console.log(template)

//expressões...
console.log(`7 x 5 = ${7 * 5}`)

//Função Arrow (será visto mais adiante)
const up = texto => texto.toUpperCase()
console.log(`Ei ${nome}... ${up('atenção')}!`)