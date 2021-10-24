// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5];

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers); //başa ekledik

items.push(maleUsers); //sona ekledik

console.log(items);

console.log(items.length);
console.log(items[0].length); // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]); // Ayse bilgisine ulastik

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5);

console.log("newItems: ", newItems);
console.log("items: ", items);

// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items;
console.log(items);

copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

console.log("kopyalandiktan sonraki hali:");
copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

let es6Items = [...items]; // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]; // es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melissa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);

//içeriyor mu -> includes()
const alisverisListem = ["elma", "ekmek", "süt"];
const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar); //true

//farklı dizileri birleştirip tek bir diziye çevirme -> concat()
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu); //["pasta", "baklava", "puding", "su", "kahve"]

//map()
const sayilar = [1, 2, 3];

let sayilarin5kati = sayilar.map(function (sayi) {
  return sayi * 5;
});

console.log(sayilarin5kati);
// Çıktı olarak [5,10,15]

//filter() map() örneği
const sayilar = [2,5,8,11,15,17];

const filtrelenmisSayilar = sayilar.filter(function(sayi) {
    return sayi >10;
});

sayi5kat=filtrelenmisSayilar.map(function(sayi){
    return sayi*5;
})

console.log(filtrelenmisSayilar); //[4,5]
console.log(sayilar); //[1,2,3,4,5]

//sort()
sayilar.sort();
console.log(sayilar);
// Çıktı olarak [10, 2, 3, 4, 5] alırız. 
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)