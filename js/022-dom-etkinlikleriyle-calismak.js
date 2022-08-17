 

//  let greeting = document.querySelector("#greeting")
//  greeting.addEventListener("click", domClick)            --> tiklandiginda degisecektir.

let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick)            // --> uzerine gelindiginde degisecektir.

 function domClick() {
    console.log("etkilesim tespit edildi.")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
    // console.log(this.innerHTML = "tiklandigi icin bilgi degistirildi!")
    // console.log(this.style.color = "red")
 }

