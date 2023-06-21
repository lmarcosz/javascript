let hora = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

let clock = setInterval(function time(){
    let agora = new Date()
    let hr = agora.getHours()
    let min = agora.getMinutes()
    let sec = agora.getSeconds()

    if(hr<10) hr = '0' + hr;
    if(min<10) min = '0' + min;
    if(sec<10) sec = '0' + sec;

    hora.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;
})