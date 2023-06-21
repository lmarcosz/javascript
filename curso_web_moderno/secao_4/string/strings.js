const escola = "Cod3r"

console.log(escola.charAt(4)) //Caractere do indice 4 da string
console.log(escola.charCodeAt(3)) //Código ASCII do caractere
console.log(escola.indexOf('o'))

//Exibe parte da string
console.log(escola.substring(1)) //determina somente ínicio
console.log(escola.substring(1,3)) //determina início e final

//Concatenação
console.log('Escola '.concat(escola).concat("!"))

//Trocar caractere (indice do caractere velho, caractere novo)
console.log(escola.replace(3,'e'))

//Transforma a string em Array, especificando o separador
console.log('Anna, Marcos, Julia, Lucas'.split(','))
