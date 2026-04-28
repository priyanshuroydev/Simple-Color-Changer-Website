let body = document.querySelector("body")
let button = document.querySelector("button")

button.addEventListener("click",()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    body.style.backgroundColor = `rgb(${r},${g},${b})`
})