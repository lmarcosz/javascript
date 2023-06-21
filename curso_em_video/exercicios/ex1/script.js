function carregar(){
    var agora = new Date()
    var hr = agora.getHours()
    var min = agora.getMinutes()
    var tit = window.document.querySelector('h1#titulo')
    var rod = window.document.querySelector('p#rodape')
    var frase = window.document.querySelector('div#frase_hora')
    var img = window.document.querySelector('img#imagem')


    min < 10 ? frase.innerHTML = `Horário atual: <strong>${hr}:0${min}</strong>` : frase.innerHTML = `Horário atual: <strong>${hr}:${min}</strong>`

    if(hr<6){
        tit.innerHTML = `Boa madrugada!`
        tit.style.color = '#A0DDFF'
        rod.style.color = '#A0DDFF'
        img.src = "images/afternight.jpg"
        document.body.style.background = '#292631'
    } else if(hr<12){
        tit.innerHTML = `Bom dia!`
        tit.style.color = '##4ECDC4'
        rod.style.color = '##4ECDC4'
        img.src = "images/morning.png"
        document.body.style.background = '#BAB33A'
    } else if(hr<=18){
        tit.innerHTML = `Boa tarde!`
        tit.style.color = '#f7f0f0'
        rod.style.color = '#f7f0f0'
        img.src = "images/afternoon.png"
        document.body.style.background = '#559cad'
     } else{
        tit.innerHTML = `Boa noite!`
        tit.style.color = '#9ED0E6'
        rod.style.color = '#9ed0e6'
        img.src = "images/night.jpg"
        document.body.style.background = '#2F0060'
    }
}