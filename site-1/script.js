const luzVermelha = document.getElementById("luz-vermelha")
const luzAmarela = document.getElementById("luz-amarela")
const luzVerde = document.getElementById("luz-verde")
const btnVermelho = document.getElementById("btn-vermelho")
const btnAmarelo = document.getElementById("btn-amarelo")
const btnVerde = document.getElementById("btn-verde")

btnVermelho.addEventListener('click' , function() {
    luzVermelha.classList.toggle('luz-vermelha')
    luzAmarela.classList.remove('luz-amarela')
    luzVerde.classList.remove('luz-verde')
})

btnAmarelo.addEventListener('click' , function() {
    luzAmarela.classList.toggle('luz-amarela')
    luzVermelha.classList.remove('luz-vermelha')
    luzVerde.classList.remove('luz-verde')
})
btnVerde.addEventListener('click' , function() {
    luzVerde.classList.toggle('luz-verde')
    luzAmarela.classList.remove('luz-amarela')
    luzVermelha.classList.remove('luz-vermelha')
})