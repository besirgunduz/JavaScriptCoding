// number veri turu
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log(
    "Fiyat:", price,
    "KDV Orani:", tax,
    "KDV Tutari:", priceTax,
    "Fiyat: ", total
)

let stringNumber = "11" //string
console.log(stringNumber)
let newNumber = Number(stringNumber) //number
console.log(newNumber)

// us alma **:
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

// asagi yuvarlama -> Math.floor:
console.log("Asagi Yuvarlama:", Math.floor(1.8)) // -> 1

// yukari yuvarlama -> Math.ceil :
console.log("Yukari Yuvarlama:", Math.ceil(1.1)) // -> 2

// yakına yuvarlama -> Math.round :
console.log("Yakina Yuvarlama: ", Math.round(1.5)) // 1.4 ->1, 1.5 ->2