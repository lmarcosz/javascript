let amigo = {
    //atributos
    nome: 'Lucas', 
    sexo: 'M', 
    peso: 76.5,
    //métodos
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
