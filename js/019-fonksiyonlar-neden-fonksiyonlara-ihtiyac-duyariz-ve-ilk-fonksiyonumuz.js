// ** Fonksiyonlar

function printHello(name) {
  console.log("Merhaba " + name);
}
printHello("Beşir");

function addition(sayi1, sayi2) {
  console.log(sayi1 + sayi2);
}
addition(4, 3);

//Anonim fonksiyonlar(Anonymous Functions)
var add = function (sayi1, sayi2) {
  console.log(sayi + sayi2);
};

//Asenkron Çalışma => 1,3,2 şeklinde çalıştı

function printScreen1() {
  console.log("İlk ekran çıktısı");
}

function printScreen2() {
  setTimeout(function () {
    console.log("İkinci ekran çıktısı");
  }, 3000);
}

function printScreen3() {
  console.log("Üçüncü ekran çıktısı");
}

printScreen1();
printScreen2();
printScreen3();

// Arrow Functions
let carp = (sayi1, sayi2) => sayi1 * sayi2;
console.log(carp(5, 6));

let toplam = (a, b) => {
  let result = a + b;
  return result;
};

//ornek
let experience = prompt("Kaç yıllık deneyiminiz var");

const developer =
  experience < 5
    ? () => alert("Bir çok konuyu biliyorum")
    : () => alert("Süperim");

developer();

//Recursion
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
alert(pow(2, 3));
