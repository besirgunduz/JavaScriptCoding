// array - dizilerle calismak

// Array olusturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [15, 25, 35, isActive, domain];
console.log(items);

for(let i=0;i<items.length;i++){
    console.log(items[i]);
}

let emptyArray = []; // bos list

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(
  items.length // array icindeki oge sayisi
);

// Array icindeki ilk elemanin cagirilmasi
console.log(items[0]);

// Array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1]);

// Array icindeki ortadaki elemanin cagirilmasi
console.log("ortadaki :", items[Math.floor(items.length / 2)]);

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
  typeof items // object olarak cikti veriyor
);
console.log(Array.isArray(items));//true

// hangileri isArray -> True verir ?
console.log("[] : ", Array.isArray([])); //true
console.log("1 : ", Array.isArray(1)); //false
console.log("true : ", Array.isArray(true)); //false

