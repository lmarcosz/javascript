var vet = []

//Adiciona novos valores na lista
function list_append(){
    let desc = window.document.getElementById('desc')
    let n = window.document.getElementById('num_in')
    let tab = window.document.getElementById('tab')
    let num = Number(n.value)

    if(n.value.length==0){
        window.alert('Campo vazio! Insira um valor.')
        n.value = ``
        n.focus()
        return
    }
    if(vet.indexOf(num)!=-1){
        window.alert('Valor inválido! O valor já existe na lista!')
        n.value = ``
        n.focus()
        return 
    }
    if(num<1||num>100){
        window.alert('Valor inválido! Insira valores entre 1 e 100!')
        n.value = ``
        n.focus()
        return
    }
    if(vet.length>0){
        desc.innerHTML = ''
    }

    vet.push(num)
    let item = window.document.createElement('option')
    item.text = `Valor ${num} adicionado.`
    item.value = `item${num}`
    tab.appendChild(item)

    n.value = ``
    n.focus()
}

//Apresenta os detalhes da lista
function list_details(){
    let desc = window.document.getElementById('desc')
    let n = window.document.getElementById('num_in')
    n.value = ``

    if(vet.length==0){
        window.alert('Adicione valores antes de finalizar')
        n.value = ``
        n.focus()
        return
    }

    vet.sort()
    let maior = vet[vet.length-1]
    let menor = vet[0]
    let sum = 0
    for(let i in vet){
        sum += vet[i]
    }
    let media = sum/vet.length

    desc.innerHTML = ``
    if(vet.length==1){
        desc.innerHTML += `- Ao todo, temos ${vet.length} único número cadastrado na lista.<br/>`
        return
    }
    desc.innerHTML += `- Ao todo, temos ${vet.length} números cadastros.<br/>`
    desc.innerHTML += `- O maior valor informado foi ${maior}<br/>`
    desc.innerHTML += `- O menor valor informado foi ${menor}<br/>`
    desc.innerHTML += `- A soma de todos os valores é ${sum}<br/>`
    desc.innerHTML += `- A média dos valores digitados é ${media}`

    n.value = ``
    n.focus()
}

//Limpar lista
function list_cleaner(){
    let desc = window.document.getElementById('desc')
    let n = window.document.getElementById('num_in')
    let tab = window.document.getElementById('tab')
    if(vet.length==0){
        window.alert('A lista já está vazia!')
    }

    vet.length = 0

    tab.innerHTML = ``
    desc.innerHTML = ``
    n.value = ``
    n.focus()
}
