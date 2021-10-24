// Break => işlemi durdur & Continue => devam et

const LOREM_LIST = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur,",
  "adipisicing",
  "elit",
];

// let counter = 0;

// for (; counter < 10; counter++) {
//   console.log(counter)
//   if (counter === 5) break;
// }

// for (; counter < 10; counter++) {
//   if (counter === 5) continue;
//   console.log(counter);
// }

// const UL_DOM = document.querySelector("#userList");

// for (let index = 0; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") break;
//   let LI_DOM = document.createElement("li");
//   LI_DOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.append(LI_DOM);
// }

// for (let index = 0; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") continue;
//   let LI_DOM = document.createElement('li')
//   LI_DOM.innerHTML = LOREM_LIST[index]
//   UL_DOM.append(LI_DOM)
// }

//örnek
for (var i = 0; i <= 10; i++) {
  console.log("dış döngü: " + i);
  for (var j = 0; j <= 5; j++) {
    if (j == 3) {
      break;
    }
    console.log("iç döngü" + j);
  }
}
