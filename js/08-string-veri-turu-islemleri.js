let email = "recepmert@teletek.net.tr"
let userName = "Recep"
let lastName = "MERT"

// string karakter sayısı -> lenght
console.log(`email uzunlugunuz: ${email.length}`)

// ilk karateri bulma
console.log(`adınızın bas harfi: ${userName[0]}
soyadinizin bas harfi: ${lastName.charAt(0)}
`)

// buyuk harf / kucuk harf
// userName = userName.toUpperCase()
// console.log(userName)

// userName = userName.toLowerCase()
// console.log(userName)

// string icinde istedigimiz bilgiyi almak ve yerini bulmak -> search:
// console.log(email.search("@")) // olmayan bir bilgi aratırsak -1 çıktısı verecektir.
// console.log(email[9])

// belli bir yere kadar al --> slice: (DOMAIN BILGISI)
let DOMAIN = email.slice( email.search("@")+1)
console.log(`DOMAIN NAME: ${DOMAIN}`)

console.log(DOMAIN.indexOf('e')) // index of ile domain'den sonra kaçıncı karakter olarak aratıyoruz (0'dan başlar.)
console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) // sadece gmail kısmını aldık. (teletek)

// bilgiyi değiştir.
// replaceMail = email.replace('teletek.net', 'gmail.com') // teletek.net kısmını gmail olarak degistirdik.
// console.log(replaceMail)

// istediğimiz bilgi var mı? --> includes
console.log(email.includes('asdkajsdıasd')) // --> false
console.log(email.includes('@'))

// istedigim bilgiyle basladi mi? bitti mi? --> startWith, endsWith
console.log('mail adresi a ile basliyor mu?',email.startsWith('a'))
console.log('mail adresi r ile bitiyor mu?',email.endsWith('r'))

