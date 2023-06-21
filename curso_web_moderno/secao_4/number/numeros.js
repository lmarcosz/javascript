const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

//Verificando se valor é inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(1.1))

const ava1 = 9.783
const ava2 = 4.937

const total = ava1*peso1 + ava2*peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //duas casas decimais
console.log(media.toString(10)) //mostra o valor em binário, mas não converte o tipo original

console.log(typeof media)
console.log(typeof Number)

//Alguns cuidados!
console.log(7/0) //Resulta em infinito
console.log("10"/2) //Resulta em 5
console.log("UEPAA" * 2)
console.log(0.7 + 0.1) //Imprecisão
console.log(typeof ((10).toFixed(2))) //o método toFixed retorna uma string

