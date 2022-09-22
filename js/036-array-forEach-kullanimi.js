
const PRODUCTS = ["Laptop", "Phone", "Speaker", "Monitor", "Keyboard"]

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )

console.log(PRODUCTS)


// const userListDOM = document.querySelector('#userList')

// for (index = 0; index < users.length; index++) {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index]
//     userListDOM.appendChild(liDOM); 
// }

const userListDOM = document.querySelector('#userList')

PRODUCTS.forEach( item => {
    const liDOM = document.createElement('li')                  // liDOM oluşturduk
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
} )