// ********** Coklu Kosullarla Calismak **********

// let userName = prompt("Kullanici Adiniz:");
// let age = prompt("Yasiniz:");
// let info = document.querySelector("#info");

// if (userName && age >= 18) {
//   info.innerHTML = "ehliyet alabilirsiniz";
// } else if (!userName) {
//   info.innerHTML = "Kullanici Adiniz Yok";
// } else if (!(age >= 18)) {
//   info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz";
// }

//örnek1
// let hava = "Yağmurlu";
// switch (hava) {
//   case "Yağmurlu":
//     console.log("Semsiyeni yanina almayi unutma");
//     break;
//   case "Güneşli":
//     console.log("Hafif giyin");
//     break;
//   default:
//     console.log("Bilinmeyen hava durumu");
//     break;
// }

//örnek2
let islem = function (a, b, operator) {
  switch (operator) {
    case "topla":
      return a + b;
      break;
    case "cikar":
      return a - b;
      break;
    case "carp":
      return a * b;
      break;
    case "bol":
      return a / b;
      break;
    default:
        return "Tanımlanmamış işlem";
      break;
  }
};

console.log(islem(23, 14, 'carp'));
console.log(islem(10, 3, 'kalan'));
