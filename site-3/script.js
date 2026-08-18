const radar = document.getElementById("radar")

radar.addEventListener('mouseenter' , function() {
    radar.style.backgroundColor = 'green'
    radar.textContent = "Entrou"
})

radar.addEventListener('mouseleave' , function() {
    radar.style.backgroundColor = 'grey'
    radar.textContent = "Saiu"
})
