let valores = [7.3, 2.8, 9.7, 0.4]

//Acessando elementos do array pelo índice
console.log(valores[0], valores[3])

//Índice que não existe no array (retorna undefined)
console.log(valores[4])

//Atribuindo um novo valor
valores[4] = 10
console.log(valores)

//exibe a quantidade de itens vazios no meio do array
valores[10] = 32
console.log(valores)

//Tamanho do array
console.log(valores.length)

//Add elementos no final do array
valores.push(null, 83, 'Olá') //quantos quiser!
console.log(valores)
//Remove o elemento no final do array
valores.pop()
//Remove o elemento no índice desejado (o índice ficará vazio!)
delete valores[2]
console.log(valores)

//Um array é do tipo object
console.log(typeof valores)
