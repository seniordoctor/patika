// let laptop1 = {} --> bu bir object
// let laptop1 = [] --> bu bir array

// key: value

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,       // 1 ile baslayan key ekleyemeyecegimiz icin tirnaklar icerisine almamiz gerekiyor.

}

console.log(laptop1)

//Dogru Anahtar Bilgisi Olusturmak - Ep1
console.log("------Ep1------")

console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

//Anahtar bilgisine yeni deger eklemek - Ep2
console.log("------Ep2------")

laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

//Yeni Bilgi Eklemek - Ep3
console.log("------Ep3------")

laptop1.version = "10.15.7"
console.log(laptop1)
console.log(laptop1.version)

// Anahtar Bilgilerine Ulasmak (keys) --> Object.keys(item) - Ep4
console.log("------Ep4------")

keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log("key: ", keyInfo)                // key bilgisine ulastik
    console.log("value: ", laptop1[keyInfo])       // value degerine ulastik
});

// Deger Bilgilerine Ulasmak (values) --> Object.values(item)
console.log("------Ep5------")

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
})

let setting = {
    password: 1234,
    userName: 'user1'
}


// let animal= {};           // set
// let key = "flies";        // key atama
// animal[key] = true;       // value atama





/* 
let person = {
  name: "Jack",
  age: 20
};

// Bu objenizi bir stringe çevirip demo idsine basacaktır.
document.getElementById("demo").innerHTML = JSON.stringify(person); 

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject); 
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 
*/
