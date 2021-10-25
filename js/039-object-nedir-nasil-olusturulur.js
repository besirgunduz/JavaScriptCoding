// Object(Nesne) Nedir ? Nasıl Oluşturulur?
//Objeler, içerisinde birden fazla değeri depolayan yapılardır.

let arrayObj = [1, 2, 3];
let object1 = { obj: 1 };

console.log("arrayObj", typeof arrayObj); //object
console.log("object1", typeof object1); //object

// Object olusturmak
let item1 = {};
let item2 = new Object();

console.log("item1", typeof item1); //object
console.log("item2", typeof item2); //object

//örnek

//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj); //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
  mesaj: "merhaba",
};
let başkaBirObje = {
  mesaj: "merhaba",
};
console.log(obje == başkaBirObje); //false
