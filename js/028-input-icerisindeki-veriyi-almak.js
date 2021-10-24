// INPUT icindeki degeri(value) almak

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault(); // default islemi engelledik...
  console.log("islem gerceklesti");

  let scoreInputDOM = document.querySelector("#score");
  console.log(scoreInputDOM.value);
  localStorage.setItem("score", scoreInputDOM.value);
}

//örnek
const myFunction = () => {
  var x = document.getElementById("myInput").value;
  document.getElementById("myP").innerHTML = "Girilen yazı = " + x;
};

