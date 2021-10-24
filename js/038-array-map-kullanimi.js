// array map kullanimi

/*Array Map metodu, parametre ile kendisine gönderilen dizinin
her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, 
yeni bir dizi meydana getirir.*/
//Kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz.

//örnek
const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];
let newUsers = USERS.map((item) => item.toLowerCase());
console.log(newUsers);

//örnek - 1.yol
const USERS_OBJ = USERS.map((item) => {
  return {
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
  };
});

//örnek - 2.yol
const USERS_OBJ2 = USERS.map((item) => ({
  userName: item,
  shortName: `${item[0]}.`,
  newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));

console.log(USERS_OBJ2);

//örnek
const sayilar = [2, 3, 4, 5, 10];
const yeniArray = sayilar.map((deger) => {
  return deger * 2;
});

console.log(sayilar);
console.log(yeniArray);

//örnek
const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const yeniMaaslar = maaslar.map((maas) => {
  if (maas > 3000) return maas * 1.15;
  else return maas * 1.25;
});

console.log(yeniMaaslar);
