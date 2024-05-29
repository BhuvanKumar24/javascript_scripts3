// btn.addEventListener('click',function (e) {
//     alert('HELLO WORLD!!!!')
// })
// btn.addEventListener('click',function (e) {
//     alert('HELLO WORLD2!!!!')
// })
// ================================================================== 2

let x = function (e) {
    alert("HELLO WORLD")
}
let y = function (e) {
    alert("HELLO WORLD2")
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a = prompt("enter a number");

if (a == 2) {
    btn.removeEventListener('click',y)
}