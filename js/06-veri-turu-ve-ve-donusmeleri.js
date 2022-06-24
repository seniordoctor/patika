// ************* Veri Turunu Pgrenmek ve Veri Turu Donusumleri *************

// veri turunu ogrenmek typeof:
let price = 111
let stringPrice = "111"
let hasPassword = true
// typeof ile degiskenin veri turunu ogrenebiliriz.
console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)


// string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
number1 = parseInt(number1)
// console.log("number: ", parseInt(number1) )
console.log("number1 için typeof değeri : ",typeof(number1))

let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", parseInt(number2), typeof(number2))

let number3 = "11.1"
number3 = Number(number2)
console.log("number3: ", typeof(number2))

//11.4px gibi atamalarda, parseFloat(number) kullanabilirsin.

// number veri tipinden string'e donusturmek.
let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5) )






