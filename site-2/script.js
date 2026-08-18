const rosto = document.getElementById("rosto-robo")
const carinho = document.getElementById("btn-carinho")
const bronca = document.getElementById("btn-bronca")
const dormir = document.getElementById("btn-dormir")
const feliz = new Audio("du-bist.mp3")
const brabo = new Audio("brabo.mp3")
const Z = new Audio("sonhos.mp3")


carinho.addEventListener('click' , function() {
    rosto.style.backgroundColor = "pink"
    rosto.textContent = "( ^-^ )"
    feliz.play();
    
})

bronca.addEventListener('click' , function() {
    rosto.style.backgroundColor = "red"
    rosto.textContent = "( >_< )"
    brabo.play();
})
dormir.addEventListener('click' , function() {
    rosto.style.backgroundColor = "darkblue"
    rosto.textContent = "( -_- ) zZz"
    Z.play();
})