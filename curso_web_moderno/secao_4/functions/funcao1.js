//Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(8, 7) //REsulta em 15
imprimirSoma(2) //O resultado dependerá de como os parâmetros são inicializados na função (neste caso, resultará em NaN)
imprimirSoma(1, 5, 3, 6, 7) //Ele pegará somente os dois primeiros valores (resulta em 6)
imprimirSoma() //Resulta em NaN (a e b são undefined)


//Funcao com retorno
function soma(a, b=0){
    return a+b
}

console.log(soma(2,3)) //Resulta em 5
console.log(soma(2)) //Resulta em 2
console.log(soma()) //Resulta em NaN (a é undefined)