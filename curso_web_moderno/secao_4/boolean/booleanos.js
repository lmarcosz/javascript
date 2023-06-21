let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Transoformando valor numérico em booleano
//(!!) Dupla negação = verdadeira
isAtivo = !!1
console.log(isAtivo)

//Casos TRUE
console.log('os verdadeiros: ')
console.log(!!35)
console.log(!!-6)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Casos FALSE
console.log('os falsos: ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//Uma prática comum no JS
//se o nome for totalmente vazio, será impresso 'Desconhecido'
let nome = ''
console.log(nome || 'Desconhecido')
//É um "jogo" lógico com os valores booleanos