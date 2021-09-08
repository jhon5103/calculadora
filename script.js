function insert(n){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + n
}


function clean(){
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('res').innerHTML = ' '
}


function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
    if (document.getElementById('resultado').innerHTML <= 0){
        var r = document.getElementById('res').innerHTML
        document.getElementById('res').innerHTML = r.substring(0, r.length-1)
    }
}


function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    resultado = resultado.replace('x', '*')
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }else{
        alert('Sem valores')
    }
    let el = document.getElementById('res')
    el.style.cssText = 'opacity: 1;'
}

