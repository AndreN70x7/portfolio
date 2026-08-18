const luzVermelha = document.getElementById("luz-vermelha")
const luzAmarela = document.getElementById("luz-amarela")
const luzVerde = document.getElementById("luz-verde")
const btnVermelho = document.getElementById("btn-vermelho")
const btnAmarelo = document.getElementById("btn-amarelo")
const btnVerde = document.getElementById("btn-verde")

btnVermelho.addEventListener('click' , function() {
    luzVermelha.style.backgroundColor = "#ef4444"
    luzAmarela.style.backgroundColor = "#334155"
    luzVerde.style.backgroundColor = "#334155"
})

btnAmarelo.addEventListener('click' , function() {
    luzAmarela.style.backgroundColor = "#eab308"
    luzVermelha.style.backgroundColor = "#334155"
    luzVerde.style.backgroundColor = "#334155"
})
btnVerde.addEventListener('click' , function() {
    luzVerde.style.backgroundColor = "#22c55e"
    luzAmarela.style.backgroundColor = "#334155"
    luzVermelha.style.backgroundColor = "#334155"

})
