//Armazenando uma funcao em uma variável
const imprimirSoma = function (a=0, b=0){
    console.log(a+b)
}

imprimirSoma(3,6)


//Armazenando uma funcao ARROW em uma variável
const soma = (a=0, b=0) => {
    return a+b
}

console.log(soma(5,7))


//Retorno implícito com ARROW
const subtracao = (a=0, b=0) => a-b //Se a função tiver uma única linha, o resultado da expressão será retornado

console.log(subtracao(2,6))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

//Note que uma ARROW FUNCTION proporciona uma SINTAXE REDUZIDA