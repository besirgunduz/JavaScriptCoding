// ********** Kosullarla Calismak **********

//örnek 1
let username = prompt("Kullanici Adinizi Giriniz:");

if (username) {
  console.log(`Kullanici Bilginiz ${username}`);
} else {
  console.log("bilgi yok");
}

// //örnek 2
let ogrVizeNot = prompt("Vize notunuzu giriniz : ");
let ogrFinalNot = prompt("Final notunuzu giriniz : ");
let ogrPuanOrtalama = ogrVizeNot * 0.3 + ogrFinalNot * 0.7;

if (ogrPuanOrtalama >= 0 && ogrPuanOrtalama <= 30) {
  console.log(`Not ortalamanız : ${ogrPuanOrtalama} KALDINIZ(FF)`);
} else if (ogrPuanOrtalama >= 31 && ogrPuanOrtalama <= 49) {
  console.log(`Not ortalamanız : ${ogrPuanOrtalama} DC - KOŞULLU`);
} else if (ogrPuanOrtalama >= 50 && ogrPuanOrtalama <= 84) {
  console.log(`Not ortalamanız : ${ogrPuanOrtalama} CC - GEÇTİNİZ!`);
} else if (ogrPuanOrtalama >= 85 && ogrPuanOrtalama <= 100) {
  console.log(`Not ortalamanız : ${ogrPuanOrtalama} Notunuz AA`);
}

//örnek 3
var randomSayi = Math.floor(Math.random() * 10);
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");

if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}

//örnek 4
let weight = prompt("Kilonuz : ");
let height = prompt("Boyunuz : ", "metre cinsinden örnek 1.66");

vkiHesapla(weight, height);

function vkiHesapla(weight, height) {
  var vki = weight / Math.pow(height, 2);
  
  if (vki < 18.5)
    return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
  if (vki >= 18.5 && vki <= 24.9)
    return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
  if (vki >= 25.0 && vki <= 29.9)
    return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
  if (vki >= 30)
    return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
  return alert("Girdiğiniz değerleri kontrol ediniz");
}
