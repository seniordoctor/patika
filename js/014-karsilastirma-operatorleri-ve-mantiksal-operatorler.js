let price = "100" // string
let priceTypeof = typeof(price)
let user = "Recep"

console.log (`price : ${price}
type : ${priceTypeof}
`)
// == isitse

console.log('== 1 :',price == 1) // false
console.log('== 100 :',price == 100) // true

// hem degeri hem de turu esitse

console.log('=== 1 :',price === 1) // false
console.log ('=== 100 : ',price === 100) // true

// != esit degilse
console.log("price != : ", price != 1) // true (cunku 1'e esit degil)

// < kucukse
console.log("price <= 100 :", price <= 100)

// > buyukse
console.log("price > 100 :", price > 100) // 100'den buyuk degil

// >= buyuk veya esitse
console.log("price >= 100 :", price >= 100) // true (100'e esit)

// && ve 
price = 0
console.log("&& :", price > 0 && user != "guest") // false cunku user guest degil

// || veya
console.log("|| :", price > 0 || user != "guest") // true cunku price 0'dan buyuk

// ! degil (tersi)
user = "guest"
price = 1
console.log("tersi :", price > 0 && !user == "guest") // price buyuk ama guest olmayani istiyor

console.log("deneme", !!2)


