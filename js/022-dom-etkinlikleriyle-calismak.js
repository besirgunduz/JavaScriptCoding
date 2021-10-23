// DOM Etkinlikleriyle Calismak

let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick);

function domClick() {
  console.log("etkinlik denetlendi");
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
}

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("input", function (event) {
  output.innerText = event.target.value.split("").join("");
});

let yellowball = document.getElementById("yellow");
let purpleBall = document.getElementById("purple");

yellowball.onclick = function () {
  purpleBall.style.backgroundColor = "yellow";
};
