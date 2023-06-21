{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) //O valor será impresso


function teste(){
    var local = 123 //Uma var declarado dentro de uma função terá somente o escopo dessa mesma função
    console.log(local)
}

teste()
console.log(local) //O valor não será impresso (local fora do escopo da função teste)

//MUITO CUIDADO AO USO DE VARIÁVEIS COM ESCOPO GLOBAL (VAR)!!!