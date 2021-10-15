// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********

let price = "350"
let user = "Beşir"

// == Eşitse
console.log(price == 15 )
console.log(price == 100 )

// === Hem değeri hem de türü eşitse
console.log(price === 350 )
console.log(price === "350" )

// != Eşit değilse
console.log(user != "Ahmet" )

// < Küçükse
console.log(price < 100)

// <= Küçük veya eşitse
console.log(price <= 100)

// > Büyükse
console.log(price > 320)

// >= Büyük veya eşitse
console.log(price >= 100)

// && ve
price = 0
console.log( price > 0 && user != "Rıza" )

// || veya
console.log( price > 0 || user != "Okan" )

// ! degil
user = "Veli"
price = 1
console.log( price > 0 && !(user == "Orhan") )

console.log(!!2); // true