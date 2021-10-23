// FORM SUBMIT:
//Form içinde bulundurduğu form elementlerinin name'leri sayesinde değerlerini alıp bu değerlerle işlem yapmanıza olanak sağlayan bir yapıdır.
//Genellikle backend'e istek yapılacağı zaman kullanılır.(Veri göndermek gibi)

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault(); // default islemi engelledik...
  console.log("islem gerceklesti");
}

//örnek
var username;
var password;
function handleSubmit(e) {
  e.preventDefault();
  console.log("username:" + username + "-" + "password:" + password);
}
function handleChange(e) {
  if (e.target.name === "username") {
    username = e.target.value;
  }
  if (e.target.name === "password") {
    password = e.target.value;
  }
}
