
const LOREM_LIST = ['lorem', 'ipsum', 'dolor', 'amet', 'conc', 'adipisicing', 'elit']

let counter = 0

// for (counter; counter < 10; counter++) {
//     if (counter == 5) {break}
//     console.log(counter)
// }

// for (counter; counter < 10; counter++) {
//     if (counter == 5) {continue}
//     console.log(counter)
// }

const UL_DOM = document.querySelector('#userList')

index = 0

for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") {continue} // continue ise dolor'u yazdirmaz devam eder, break ise dolor'u ve sonrasini yazdirmaz
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}