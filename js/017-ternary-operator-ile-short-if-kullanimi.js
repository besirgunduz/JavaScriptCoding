// ********** ternary operator ile short if kullanimi **********

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`

let money=40;
let canBuy= (money<17) ? "Satın alamazsın" : (money>=40)? "Satın alabilirsin" : "Hata"
console.log(canBuy);

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)
>> false

console.log(boolean)
