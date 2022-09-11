/*
1: Form secimi
2: Input Bilgisini UL icerisine ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmez ise kullaniciyi uyar
*/

let userFormDOM = document.querySelector('#userForm')
userFormDOM = addEventListener('submit', formHandler)
alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong> ${title} </strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if (USER_NAME.value && score.value) {
        addItem(USER_NAME.value, SCORE.value) // girilen degerleri yazdirdik.
        USER_NAME.value = "" // deger girildikten sonra degerleri temizledik.
        score.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunction(
            "Baslik bilgisi",
            "Hatali veya eksik bilgi girildi.",
            "danger" //warning, danger, success gibi degerler ile uyari seviyesini belirleyebiliriz.
            )
    }
}

let userListDOM = document.querySelector('#userList')
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM)
}