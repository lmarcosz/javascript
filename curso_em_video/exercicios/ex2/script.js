function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = window.document.getElementById('ano').value
    var idade = ano_atual - ano_nasc
    var s = window.document.getElementsByName('sexo')
    var res = window.document.getElementById('resultado')
    var img = window.document.getElementById('imagem')
    
    //Tratamento de erros
    if(ano_nasc > ano_atual || ano_nasc < 0){
        window.alert('Ano de nascimento INVÁLIDO! Preencha novamente.')
        return
    }
    if(ano_nasc.length==0){
        window.alert(`Campo VAZIO! Preencha o ano de nascimento.`)
        return
    }

    var ano_res = ''
    if(idade==1){
        ano_res = 'ano de idade.'
    } else{
        ano_res = 'anos de idade.'
    }

    if(idade < 4){
        if(s[0].checked){
            res.innerHTML = `Detectamos uma bebê com ${idade} ${ano_res}`
            img.src="images/bebe_m.jpg"
        } else if(s[1].checked){
            res.innerHTML = `Detectamos um bebe de ${idade} ${ano_res}`
            img.src="images/bebe_h.jpg"
        }
    } else if(idade < 13){
        if(s[0].checked){
            res.innerHTML = `Detectamos uma garota com ${idade} ${ano_res}`
            img.src="images/crianca_m.jpg"
        } else if(s[1].checked){
            res.innerHTML = `Detectamos um garoto com ${idade} ${ano_res}`
            img.src="images/crianca_h.jpg"
        }
    } else if(idade < 21){
        if(s[0].checked){
            res.innerHTML = `Detectamos uma adolescente com ${idade} ${ano_res}`
            img.src="images/adolescente_m.jpg"
        } else if(s[1].checked){
            res.innerHTML = `Detectamos um adolescente de ${idade} ${ano_res}`
            img.src="images/adolescente_h.jpg"
        }
    } else if(idade < 60){
        if(s[0].checked){
            res.innerHTML = `Detectamos uma adulta com ${idade} ${ano_res}`
            img.src="images/adulta_m.jpg"
        } else if(s[1].checked){
            res.innerHTML = `Detectamos um adulto de ${idade} ${ano_res}`
            img.src="images/adulto_h.jpg"
        }
    } else{
        if(s[0].checked){
            res.innerHTML = `Detectamos uma idosa com ${idade} ${ano_res}`
            img.src="images/idosa_m.jpg"
        } else if(s[1].checked){
            res.innerHTML = `Detectamos um idoso de ${idade} ${ano_res}`
            img.src="images/idoso_h.jpg"
        }
    }
}