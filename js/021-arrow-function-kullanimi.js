// Arrow function Kullanimi

//normal fonksiyon
function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}
hello("C# and JS");

//Arrow kullanım
const helloFuncV1 = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};
helloFuncV1("Beşir");

const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`);
helloFuncV2("Ahmet");

const helloFuncV3 = (firstName, lastName) =>
  console.log(`Merhaba ${firstName} ${lastName}`);

helloFuncV3("Beşir", "Gündüz");

const helloFuncV4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
  return info;
};

helloFuncV4("x", "y");

//örnekler

let toplam = (x, y) => x + y;

let sayi = (x) => x * x;

const multiplier = (item, multi) => item * multi;

const myList = (param1, param2) => param1.concat(param2);
myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

let feedTheCat = (cat) => {
  if (cat === "hungry") {
    return "Feed the cat";
  } else {
    return "Do not feed the cat";
  }
};

/*örnek */
const seriesList = (list) => {
  list.forEach((series, index) => {
    console.log(`${index + 1}. ${series}`);
  });
};

seriesList(["A", "B", "C"]);

/*örnek */
const newArray = (nums) => {
  const newNums = nums.map((e) => {
    if (e % 2 == 0) {
      return e * 2;
    } else if (e % 2 == 1) {
      return e * 3;
    }
  });
  return newNums;
};

console.log(newArray([1, 2, 3, 4, 5]));
