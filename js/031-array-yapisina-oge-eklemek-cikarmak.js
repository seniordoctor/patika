let items = [10, 20, 30, 40, ]
console.log("items- ilk hali : ", items)

// Array sona oge/ eleman ekleme --> push

items.push(50)
console.log('50 : ', items)

// basa basa ekleme --> unshift

items.unshift(5)
console.log("5 : ", items)

// sondaki ogeyi cikarma --> pop

let lastItem = items.pop() // son elemani lastItem icerisine ekledik
console.log("lastItem: ", lastItem, " items: ", items)

// bastaki ogeyi cikarma --> shift

let firstItem = items.shift() // ilk elemani lastItem icerisine ekledik
console.log("firstItem: ", firstItem, " items: ", items)

// array  icindeki bir ogenin bilgisini degistirilmesi

//ilk elemanin degistirilmesi
items[0] = 5;
console.log("items: ", items)

// son elemanin degistirilmesi
items[items.length - 1] = 100;
console.log("items: ", items)