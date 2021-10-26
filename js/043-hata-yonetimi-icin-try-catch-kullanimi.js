// hata-yonetimi-icin-try-catch-kullanimi
//Herhangi bir iş yaparken bir hatayla karşılaşılma durumunun ele alınması

let products;

try {
  products.forEach((item) => console.log(item));
} catch (error) {
  console.log("error:", error);
  // products = [1, 2, 3]
  // products.forEach(item => console.log(item));
}

console.log("hata yonetimi duzgun calisiyor");

let info = "kodluyoruz";
console.log(info);

//örnek
var messages, number;

function getValue() {
  messages = document.getElementById("error-message");
  messages.innerHTML = "";
  messages.style.color = "red";

  number = document.getElementById("get-value").value;

  try {
    if (number == "") throw "is Empty";
    if (isNaN(number)) throw "is not a number";
    if (number > 10) throw "is too Big";
    if (number < 5) throw "is too Small";

    debugger;

    if (number == number) {
      messages.style.color = "green";
      throw "is " + number;
    }
  } catch (err) {
    messages.innerHTML = "Input " + err;
  } finally {
    var test = (document.getElementById("get-value").value = "");
  }
  console.log([typeof test, test, number.valueOf()]);
}

Resources;
