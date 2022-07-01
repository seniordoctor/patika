// ********* kosullarla calismak *********

let username = prompt("Kullanici Adinizi Giriniz: ")
// kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log("username")} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log("username")} else {console.log("bilgi yok")}

if (username.length > 0){
    console.log(`Kullanici Bilginiz : ${username}`)
}
else {
    console.log("bilgi yok")
}


