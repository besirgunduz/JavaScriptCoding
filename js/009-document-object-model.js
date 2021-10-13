// DOM => bir belgenin içeriğine, yapısına ve stiline dinamik olarak
// erişmesine ve güncellemesine izin veren bir platform ve dilden bağımsız bir arayüzdür.

// pathname
console.log(document.location.pathname);

// head icindeki bilgiler
console.log(document.head);

// body icindeki bilgiler
console.log(document.body);

// url bilgisi
console.log(document.URL);
console.log(document.baseURI);

// document icerisinde style bilgilerini degistirmek:
document.body.style.backgroundColor = "black";

function myFunction() {
  let w = window.open();
  w.document.open();
  w.document.write("<h1>merhaba dünya</h1>");
  w.document.close();
}

document.getElementById("btnClick").addEventListener("click", clicked);
function clicked() {
  alert("Butona Tıklandı");
}
