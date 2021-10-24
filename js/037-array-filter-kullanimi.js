// array filter kullanimi

//Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp,
//istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

// 5 harften fazla olanlar
const PRODUCTS = [
  "Mic",
  "Cable",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

const NEW_PRODUCTS = PRODUCTS.filter((item) => item.length > 5);
console.log(NEW_PRODUCTS);

// aktif kullanicilar ??
const USERS = [
  { fullName: "Beşir Gündüz", isActive: false },
  { fullName: "Ahmet Urgan", isActive: true },
  { fullName: "Asya Basar", isActive: true },
  { fullName: "Aksel Durmaz", isActive: false },
];

const ACTIVE_USERS = USERS.filter((user) => user.isActive);
console.log(ACTIVE_USERS);

//M harfiyle başlayan ürünler
const products = [
  "Mikrofon",
  "Kablo",
  "Telefon",
  "Bilgisayar",
  "Mouse",
  "Klavye",
  "Ekran",
];
const newProducts = products.filter((item) => item.startsWith("M"));
console.log(newProducts);

//örnek
const person = [
  {
    name: "Beşir",
    age: 28,
    languages: ["C#,JavaScript"],
  },
  {
    name: "Ahmet",
    age: 32,
    languages: ["C#,Java"],
  },
];

const newPerson = person.filter(
  (person) => person.age > 30 && person.languages.includes("Java")
);
console.log(newPerson);
