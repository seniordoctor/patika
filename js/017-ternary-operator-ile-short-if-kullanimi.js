// ternary operator ile short if kullanimi

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici Bilginizi Yaziniz: ")
let info = document.querySelector("#info")

//ternary kullanimi:
// kosul ? dogurysa : yanlissa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi" }`
// userName uzunlugu 0'dan buyuk mu ? dogruysa userName yazdir : Yanlissa "Kullanici Bilginiz Bulunamadi" yazdir.

