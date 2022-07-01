// *********** css class eklemek veya cikartmak ***********

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class","third-class") // birden fazla class ekleme

// greeting.classList.remove("text-primary") // text-primary class'ini silebiliriz.
greeting.classList.remove("new-info", "second-class","third-class") // birden fazla class silme

console.log(greeting.classList)