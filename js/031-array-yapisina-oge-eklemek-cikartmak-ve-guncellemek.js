// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

var sports = ['basketball', 'football', 'tennis' ];
sports.push('baseball');
console.log(sports);

// Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop() // listeden çıkardığımız elemanı değişkene atadım.
console.log("lastItem: ", lastItem, ", items: ", items)

// Array: basa oge eklemek -> unshift 
items.unshift(5)
console.log("5 : ", items)

// Array: bastaki ogeyi cikarmak -> shift
let firstItem = items.shift() // ilk elemani firstItem icerisine ekledik
console.log("firstItem: ", firstItem, ", items: ", items)