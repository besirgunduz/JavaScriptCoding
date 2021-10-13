//String Veri Turu Islemleri

let email = "besirgunduz1993@gmail.com";
let firstName = "Beşir";
let lastName = "GÜNDÜZ";

// string karakter sayisi -> length
console.log(email.length);

// Ilk Karakteri Bulmak:
console.log(firstName[0]);
console.log(firstName.charAt(0));

// buyuk harf / kucuk harf :
email = email.toUpperCase();
console.log(email);

firstName = firstName.toLowerCase();
console.log(firstName);

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(firstName.search("ş"));
console.log(firstName[2]);

email.search("-"); // olmayan birşey aratırsak -1

// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))); // sadece gmail kismini aldik

// bilgiyi degistir -> replace :
email = email.replace("GMAIL.COM", "hotmail.com");
console.log(email);

// istedigim bilgi var mi ? -> includes :
email.includes("dkfhsd"); // false
email.includes("@"); // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(email.endsWith(".com"));

// Ilk Harflerini Buyuk Yapmak
firstName = "besir";
lastName = "gunduz";

let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()} `;

console.log(fullName);


let url = "www.kodluyoruz.org";
let language = "Java";

language=language.replace("Java", "JavaScript ");
console.log(language);

let DOMAIN2=url.slice(url.indexOf(".")+1)
console.log(DOMAIN2);