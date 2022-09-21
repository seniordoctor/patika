let items = [1, 2, 3, 4, 5]

// array icinde array
let femaleUser = ["Ayse", "Fatma", "Naz", "Nehir", "Hülya"]
let maleUser = ["Ali", "Ahmet", "Recep", "Mert", "Abdullah"]

items.unshift(femaleUser) // basina ekleme
items.push(maleUser) // sonuna ekleme

console.log(items) 

// array icerisinden oge ayirmak --> splice(pos, item?)
let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)

// array icerisinden ogenin index bilgisini bulmak --> indexOf('Value')
items.unshift("lorem")
items.push("ipsum")

items.indexOf('lorem')

console.log( items.indexOf('ipsum') )

// array kopyalamak --> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop()
console.log("copyItems: ", copyItems)
console.log("items: ", items)               // kopyalama yapmiyor! degerler esit

console.log("slice ile kopyalandiktan sonraki hali:")
copyItems = items.slice()                   // kopyalama yapabiliyoruz.
copyItems.pop() // son ogeyi cikarir
console.log("copyItems: ", copyItems)
console.log("items: ", items)

let es6Items = [...items]                   // es6 ve sonrasinda gelen kopyalama islemi!!
console.log(es6Items)

// iki array bilgisini birlestirmek
let allUsers = [...femaleUser, ...maleUser] // es6 array yapisini birlestirmek
console.log(allUsers)

// array icerisindeki bilgiyi string'e cevirme
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// istedigimiz index bilgisine gore oge eklemek --> splice (index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melissa")
console.log(allUsers)