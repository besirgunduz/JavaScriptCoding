//prompt ile Kullanicidan Bilgi Almak

let userName=prompt("Adınızı giriniz : ");
console.log("Merhaba "+userName);

let title=document.querySelector("#title");

title.innerHTML =`${title.innerHTML} <small style="color:red">${userName}</small>`;

prompt("Boyunuzu giriniz", "Örnek: 166 cm");