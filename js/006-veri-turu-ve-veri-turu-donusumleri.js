// veri turunu ogrenmek typeof:
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

// string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: ", number1, typeof number1)

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(0.5) //false

//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('4') //false


// string veri tipinden int'e donusturmek:
let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", number2, typeof(number2))

// number veri tipinden string'e donusturmek:
let number5 = 55;
number5 = number5.toString()
console.log(number5, typeof(number5))

let number6 = 66;
number6 = String(number6)
console.log(number6, typeof(number6))


let a = "" || -2 || 'javascript'
console.log(a); //-2

console.log(true + false) //1

console.log(12 / "6") //2

console.log([1, 2, 3] > null) //false

console.log("number" + 15 + 3) //number153

console.log(['x', 'y'] == 'x,y') //true