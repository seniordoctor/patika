// Genellikle backend'e istek gondermek icin kullanilir (veri gondermek gibi)
// en onemli parametresi method parametresidir. Method, "post" ve "get" olmak uzere iki deger alabilir.

// FROM SUBMIT : 

let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', formSubmit)


function formSubmit (event) {
    event.preventDefault() // console'dan kaybolmasını engelledik.
    console.log("islem gerceklesti")

    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
}