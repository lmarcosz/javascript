function contar(){
    var ini = window.document.querySelector('input#n_inicio')
    var fim = window.document.querySelector('input#n_fim')
    var pas = window.document.querySelector('input#n_passo')
    var desc = window.document.getElementById('desc')
    var cont = window.document.getElementById('n_contagem')

    if(ini.value.length==0||fim.value.length==0||pas.value.length==0){
        desc.innerHTML = `Impossível contar!`
        return
    }

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if(p<=0){
        window.alert('Passo inválido! (Será considerado PASSO 1)')
        p = 1
    }

    desc.innerHTML = `Contando:`
    if(i<f){
        for(var j=i;j<=f;j+=p){
            cont.innerHTML += `${j} &#x1F449 `
        }
    } else{
        for(var j=i;j>=f;j-=p){
            cont.innerHTML += `${j} &#x1F449 `
        }
    }
    cont.innerHTML += `&#x1F3C1`
}