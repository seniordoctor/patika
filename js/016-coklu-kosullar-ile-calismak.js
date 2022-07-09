// ************ Coklu Kosullarla Calismak ***********

let userName = prompt("Kullanici Adiniz: ")
let age = prompt ("Yasiniz: ")
let info = document.querySelector("#info")  // index içerisindeki alana yazdırabilmemiz için document.querySelector ile birlikte
                                            // ("#info") yazarak içerisine bilgi atayabilir duruma geldik, info.innerHTML 


if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "Kullanici adi giriniz!"
} else if ( !(age >= 18) ) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
}

 




