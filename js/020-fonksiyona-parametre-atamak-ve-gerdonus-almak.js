// ************** fonksiyonlara Parametre Atamak ve Fonksiyondan Geri Dönüş Almak **************

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir (return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName = "lorem"

// greetings(firstName) --> bir parametredir firstName'i degistirmez.
function greetings(firstName="", lastName="") { // default parametre aliyor.
    // console.log(`Merhaba ${firstName ? firstName : ""}`) // firstname varsa goster yoksa bos goster.
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} 


// greetings("Apple") // Apple degeri firstName olarak alınacak.
// let info = greetings("firstName, lastName") // function icerisine degerleri buradan alabilir.
// console.log(info) // undefined

function printFullName (){
    let firstName = 'Recep'
    let lastName = 'MERT'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
// console.log(printFullName())
printFullName()


// function with one parameter
function functionName(parm1) {
    //code goes her
  }
  //functionName(parm1) // during calling or invoking one argument needed
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))




