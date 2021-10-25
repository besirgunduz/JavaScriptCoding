// Object icinde metot nasil ekleriz

let user1 = {
  firstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toLowerCase()}. ${this.lastName.toUpperCase()}`;
  },
};

console.log(user1);
console.log(user1.shortName);

//örnek
var person = {
  name: "Beşir",
  surname: "Gündüz",
  age: 28,
  city: "Istanbul",
  introduce: function () {
    console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
  },
};

person.myCity = function () {
  console.log(`I live in ${this.city}`);
};
person.myCity();

function Insan(isim, yas) {
  this.isim = isim;
  this.yas = yas;
}

const besir = new Insan("Beşir", 28);
console.log(besir.yas); //28
