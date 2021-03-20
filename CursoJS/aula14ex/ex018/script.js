function gerar() {
    var num = document.getElementById('numtxt')
    var tab = document.getElementById('selTab')
    var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('[ERRO] digite um número!')
    } else {
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) { 
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}