function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anotxt')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                // Bebê
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 12) {
                // Menino
                img.setAttribute('src', 'menino.png')
            } else if (idade < 27) {
                // Homem
                img.setAttribute('src', 'homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                // Bebê
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 12) {
                // Menina
                img.setAttribute('src', 'menina.png')
            } else if (idade < 27) {
                // Mulher
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}