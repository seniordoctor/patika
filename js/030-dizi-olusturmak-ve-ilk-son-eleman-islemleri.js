// array - diziler

// array olusturmak

let domain = "doctor"
let isActive = false
let items = [1, 2, 3, isActive, domain]

console.log(items)

let emptyArray = [] // bos liste

// array icindeki eleman sayisini ogrenmek

console.log(
    "eleman sayisi : ",
    items.length
    )

document.querySelector('#info').innerHTML = items.length // kullaniciya bilgi gostermek icin kullanilir.

// array ilk eleman cagirma

console.log(
    "ilk eleman : ",
    items[0]
    )

// array ortadaki elemanı cagirma

console.log(
    "Ortadaki : ",
    items[ Math.floor(items.length / 2) ]
)

// array son eleman cagirma

console.log(
    "son eleman : ",
    items[items.length - 1]     // son ogeyi bulmak icin kullanilir.
    ) 

// degisken icindeki bilginin array olup olmadigini kontrol etme

console.log(
    typeof (items) // object olarak cikti veriyor.
    )

console.log(
    Array.isArray(items) // true
)

// hangileri isArray --> true verir?

console.log("[] :", Array.isArray( [] ) )
console.log("1 :", Array.isArray( 1 ) )
console.log(" true :", Array.isArray( true ) )
