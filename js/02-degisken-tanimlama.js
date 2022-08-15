//  ********************* let ve const ile degisken tanımlama  *********************

// var ile degisken tanımlamak:
/*var serverName = "RecepMERT"
console.log(serverName)
console.log("Furkan")*/

//--------

// let ile degiskeni bos tanımlamak:
let serverName;
console.log(serverName)

// let ile değişkene bilgi atamak:
serverName = "https://google.com.tr"
console.log(serverName)

// let ile değişkene bilgi atayarak tanımlamak:
let password = "1234"
console.log(password)

// değişken ataması yapmadan önce kullanmaya çalışmak:
// console.log(fullName)
let fullName = "Recep MERT"
// fullName değerini atamadan önce kullandığımız için hata verecektir.
// let ile tanımlanan değeri değiştirmek:
fullName = "Kursat MERT" 
// console.log(fullName) 
// birleştirme veya ekleme işlemi
fullName = fullName + " Yeni eklenen bilgi"
// console.log(fullName)

fullName = "Sifirlandi"
fullName += "ve Yeni Bilgi Eklendi."
console.log(fullName)


// const ile boş tanımlamaya çalışmak:
// const serverPassword; // sadece değişken tanımlandı ama içi boş? --> hata verdi

 // const ile değişken tanımlamak
 const SERVER_PASSOWRD = "securePass"
 console.log(SERVER_PASSOWRD)

//  SERVER_PASSOWRD = "1234" // hata verecek --> const değeri değişmez "let" ile tanımla.
//  console.log(SERVER_PASSOWRD)