function calcular(){
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('tab')

    if(num.value.length==0){
        window.alert('Por favor, digite um número!')
        return
    }

    let n = Number(num.value)

    tab.innerHTML = ''
    for(var i=1;i<=10;i++){
        let item = window.document.createElement('option')
        item.text = `${n} X ${i} = ${n*i}`
        item.value = `tab${i}`
        tab.appendChild(item)
    }

}