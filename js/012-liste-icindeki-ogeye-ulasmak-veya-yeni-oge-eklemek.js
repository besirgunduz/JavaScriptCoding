// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "son oge degisti...";

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degisti...";

let ulDOM = document.querySelector("ul#list");

let liDOM = document.createElement("li");
let liDOM2 = document.createElement("li");

liDOM.innerHTML = "Kendi Olusturdugumuz Oge";
liDOM2.innerHTML = "oge2";

//append - en sona ekler
ulDOM.append(liDOM);
ulDOM.append(liDOM2);

//TODO örnek uygulama
var liste = document.querySelector("ul");
var urun = document.querySelector("#veri");
var ekleButonu = document.querySelector("#ekle");

ekleButonu.addEventListener("click", function () {

  var li = document.createElement("li");
  li.innerHTML = urun.value;

  if (li.innerHTML != "") liste.appendChild(li);
  else alert("Eklenecek öğe boş olamaz");

  urun.value = "";
});
