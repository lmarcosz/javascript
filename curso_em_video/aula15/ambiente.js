let vet = [3,4,2,67,4,6,4,9]
console.log(`O nosso vetor é o ${vet}`)

//Add valor no final do vetor
vet.push(0)
console.log(vet)

//Tamanho do vetor
console.log(`O vetor possui ${vet.length} posições`)

//Ordena o vetor em ordem crescente
vet.sort()
console.log(vet)

//Formas de percorrer o vetor
//(1)
/*
for(var i=0;i<vet.length;i++){
    console.log(`A posição ${i} possui o valor ${vet[i]}`)
}
*/
//(2)
for(var i in vet){
    console.log(`A posição ${i} possui o valor ${vet[i]}`)
}

//Buscar índice de um elemento do vetor
console.log(vet.indexOf(4))
