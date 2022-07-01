// ****** 012 - liste icerisindeki son elemana ulasmak veya eklemek 

let item = document.querySelector("ul#list>li:last-child") //son ogeyi cagirdi
console.log(item)
item.innerHTML = "son oge degistirildi." // item.innerHTML ile birlikte item degiskeninin degerini degistirdik.


console.log(document.querySelector("ul#list>li:first-child").innerHTML = "ilk oge degistirildi.") //first-child ile ilk ogeyi sectik
// inner.HTML = "degistirildi" ciktisini elde ettik.

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi olusturdugumuz oge"

ulDOM.append(liDOM) // liDOM'a ekleme yaptık (en son) 

ulDOM.prepend(liDOM) //ekleme yaptık



