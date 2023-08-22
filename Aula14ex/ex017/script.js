function tabuada(){
    let numero = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')
    
    if(numero.value.length == 0){
        alert('ERRO -- VALORES FALTANTES')
    }
    else{
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}