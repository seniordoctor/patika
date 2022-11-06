let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayObj type:", typeof(arrayObj))
console.log("object1 type:", typeof(object1))

// object olusturup type bakma
let item1 = new Object()
let item2 = {}
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))


// Object olusturma
let item3 = {}  // suslu parantez ile bunun bir object oldugunu gosterdik.
let item4 = new Object()    // object olusturduk.

console.log("object1", object1)     //object1 icindeki degeri görebiliriz


let myObject = {                        // myObject isimli object olusturduk.
    name: "Recep",                      
    surname: "MERT",
    age: 21,

    ability: {                          // ability adinda baska bir object olusturduk.
        title: "Software Dev",
        year: 2022
    }
}

console.log(myObject.ability) // sadece myObject icerisindeki ability object'ini gormek istedik.