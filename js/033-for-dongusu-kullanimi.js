// For Dongusu

//örnek
for (var i = 0; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//örnek
let users = ["Lorem", "Ipsum", "Dolor"];

const userListDOM = document.querySelector("#userList");

for (index = 0; index < users.length; index++) {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = users[index];
  userListDOM.appendChild(liDOM);
}
