// Array forEach Metotu - dizilerde kullan

const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];
PRODUCTS.forEach((product, index, array) => (array[index] = product + " 111"));
console.log(PRODUCTS);

const userListDOM = document.querySelector("#userList");
PRODUCTS.forEach((item) => {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = item;
  userListDOM.appendChild(liDOM);
});

örnek;
const animals = ["cat", "dog", "bird", "horse"];
animals.forEach((value, index, array) => {
  console.log("value: ", value);
  console.log("index: ", index);
  console.log("array: ", array);
});

//örnek
const animals = ["cat", "dog", "bird", "horse"];
animals.forEach((animal) => console.log(animal));

//örnek
const numbers = [4, 11, 9];
const newArray = [];
numbers.forEach((number) => {
  newArray.push(number * 3);
});
console.log(newArray);
