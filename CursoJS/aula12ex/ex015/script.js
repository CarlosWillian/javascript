function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora < 12) {
    // Bom dia
    img.src = 'imagens/manha.png'
    document.body.style.background = '#FDB27E'
}
else if (hora <= 18) {
    // Boa tarde
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#98A6A7'
}
else {
    // Boa noite
    img.src = 'imagens/noite.png'
    document.body.style.background = '#F37D80'
}
}
