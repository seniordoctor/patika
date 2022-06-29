let title = document.getElementById('title')
title.innerHTML = "Degisen bilgi"
console.log(title.innerHTML)

let link = document.querySelector("#nLink")
link.innerHTML += " degistirildi"
link.style.color = "red"
link.classList.add('btn')