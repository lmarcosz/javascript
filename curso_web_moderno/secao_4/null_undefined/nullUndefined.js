let valor //não inicializada
console.log(valor)

valor = null //ausência de valor (caso queira zerar o valor de uma variável, sempre use null)
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco) //o atributo preco não foi inicializado
console.log(produto) //mesmo sendo vazio, o objeto produto foi inicializado

produto.preco = 5.40 //inicializando de forma dinâmica e atribuindo um valor para o atributo preco
console.log(produto)

//EVITE ATRIBUIR UNDEFINED!
//produto.preco = undefined
//Escolha null ou outro valor
produto.preco = null //Sem preco
console.log(!!produto.preco)
console.log(produto)

//Para excluir um atributo do objeto
delete produto.preco
console.log(produto)
