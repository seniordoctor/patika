// Arrow function kullanimi 

function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")


const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) } 
//farkı nedir?
//function yerine const yazdık, = 'den sonra parametre verdik ve fat arrow ile fonksiyon olduğunu belirtip çalıştırdık

helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
// V1 olandan farkı eğer 1 parametre (firstName) ve 1 işlem yaptıracaksak süslü parantez {} kullanmamıza gerek yoktur.
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) => 
console.log(`Merhaba ${firstName} ${lastName}`)

helloFuncV3("helloFuncV3", "Last Name info")


const helloFuncV4 = (firstName, lastName) => {
let info = `Merhaba ${firstName} ${lastName}`
console.log(info)
return info
}

helloFuncV4("helloFuncV4", "Other Info")
