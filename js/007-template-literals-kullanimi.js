/* Template Literals (önceki adıyla Template Strings), kod okunulabilirliği
ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir.*/

`Template literals örneği`;

//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nLahmacunSarma";

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
Lahmacun
Sarma  
`;
let name = "Beşir";
let surname = "Gündüz";

//Eski kullanım
console.log("Benim adım " + name + " " + surname);

//Yeni kullanım
console.log(`Benim adım ${name} ${surname}`);

//Eski kullanım
const kisi = "<p>" + name + "</p>" + 
             "<p>" + surname + "</p>";

document.body.innerHTML = kisi;

//Yeni kullanım
const yeniKisi = `
<p>${name}</>
<p>${surname}</>
`;

document.body.innerHTML = yeniKisi;

