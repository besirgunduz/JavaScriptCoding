// boolean
let isActive = false
isActive = true
console.log(isActive)

let userName; // undefined
let isUserName = Boolean(userName) // false
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "Beşir Gündüz"

console.log("User Name:", Boolean(userName))

Boolean(0) //  false
Boolean(-0) // false
Boolean(-0.1) // true

console.log(Boolean("0" === 0)) // true

Boolean(userName.length > 0) // true