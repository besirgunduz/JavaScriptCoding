// Local Storage:

// localStorage icerisine bilgi kaydetmek:
let email = "besirgunduz1993@gmail.com";
localStorage.setItem("userEmail", email); // -> anahtar, deger yapisi kullanilir(key, value)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem("userEmail"); // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo);

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem("userEmail"); // key bilgisini yazarak silebiliriz..

//örnek

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("item");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  liMaker(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
