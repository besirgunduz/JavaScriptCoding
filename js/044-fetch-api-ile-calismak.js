// fetch api ile calismak
// Ajax yerine alternatif olarak asenkron veri alıp ve veri göndermemizi sağlar.

// let userListDOM = document.querySelector("#userList");

// // API uzerinden veri cektik
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((responseJson) => {
//     responseJson.forEach((item) => {
//       let liDOM = document.createElement("li");
//       liDOM.innerHTML = item.id + " " + item.title;
//       userListDOM.appendChild(liDOM);
//     });
//   });

// //örnek
// fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
//   response.json().then((todos) => {
//     todos.forEach((todo) => {
//       console.log(todo);
//     });
//   })
// );

// //POST İsteği Yapma

// let payload = {
//   title: "Blog title",
//   body: "lorem ipsum",
//   userId: 1,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(payload),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
//   .then((response) => response.json())
//   .then((json = console.log(json)))
//   .catch((error) => console.log(error));

//örnek
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

//örnek
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => json.forEach((item) => console.log(item.email)))
  .catch((err) => console.log(err));
