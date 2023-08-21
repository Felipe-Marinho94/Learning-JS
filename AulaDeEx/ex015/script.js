function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] -- Verifique os dados e digite novamente!")
    }
    else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'

            if(idade > 0 && idade <= 2){
                img.setAttribute('src', 'bbmasc.jpg')
            }

            else if(idade < 10){
                img.setAttribute('src', 'criancamasc.jpg')
            }

            else if(idade < 21){
                img.setAttribute('src', 'jovemmasc.jpg')
            }

            else if(idade < 50){
                img.setAttribute('src', 'adultomasc.jpg')
            }

            else{
                img.setAttribute('src', 'maduromasc.jpg')
            }
        }
        else if(fsex[1].checked){
            gênero = 'Mulher'

            if(idade > 0 && idade <= 2){
                img.setAttribute('src', 'bbfem.jpg')
            }

            else if(idade < 10){
                img.setAttribute('src', 'criancafem.jpg')
            }

            else if(idade < 21){
                img.setAttribute('src', 'jovemfem.jpg')
            }

            else if(idade < 50){
                img.setAttribute('src', 'adultofem.jpg')
            }

            else{
                img.setAttribute('src', 'madurofem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}