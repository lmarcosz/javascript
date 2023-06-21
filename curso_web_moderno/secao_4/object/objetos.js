//Criando de forma literal um objeto vazio
const prod1 = {}

//Adicionando DINAMICAMENTE atributos e valores no objeto
prod1.nome = 'Moto G52'
prod1.preco = 1104.37
prod1['Desconto Legal'] = 0.40 //Atributo com espaço (EVITAR!)

console.log(prod1)


//Criando um objeto com atributos, valores e outros objetos dentro dele
const prod2 = {
    nome: 'Relógio Digital',
    preco: 45.80,
    obj: { //Esse obj é único dentro de prod2
        blabla: 1,
        obj: { //Esse obj é único dentro do outro obj
            blabla: 2
        }

    }
}

console.log(prod2)

/*
 *Noção de JSON(não é a mesma coisa de objeto)
 * - JSON: é um formato TEXTUAL para comunicação entre sistemas.
 * (Note que os identificadores estão entre apsas duplas!)
 */
//{"nome": 'Relógio Digital', "preco": 79.90}

