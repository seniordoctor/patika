// https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Template_Literals


// kullanım sekli

// // "eski string"
// let eskiString = "En Sevdigim Yemekler:\nPilav\nTavuk"

// // `yeni string`
// let yeniString = `En Sevdigim Yemekler:
// Pilav
// Manti`

// console.log(eskiString, yeniString)

// let ad = "Recep"
// let soyad = "MERT"

// // eski kullanım:
// console.log("Benim adım "+ ad+" "+ soyad)

// // yeni kullanım:
// console.log(`Benim adım ${ad} ${soyad}`)

// let degerOne = "10"
// let degerTwo = "2"

// console.log(`${degerOne} Carpi ${degerTwo} Esittir ${degerOne * degerTwo}`)

// Yeni kullanım, Template literal kullanarak:

// const ad = `Recep`
// const soyad = `MERT`
// const gozRengi = `Mavi`
// const yas = 21

// const kisi = `
// <p>${ad}</>
// <p>${soyad}</>
// <p>${gozRengi}</>
// <p>${yas}</>
// `;

// document.body.innerHTML = kisi

// console.log(kisi)

let username = "Recep"
const DOMAIN = "teletek.net.tr"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username ,"sitemize hoş geldin email adresin", email)
// let info = `Merhaba username`

let info = `Merhaba, sitemize hoş geldin ${username}, 
kisa isminiz: ${username[0]}.
email adresiniz: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 5} TL
guncel saat bilgisi: ${new Date().getHours()} 
`


console.log(info)



