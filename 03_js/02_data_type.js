/* let result = 10 + 30;
console.log(result);

console.log(typeof result);
console.log(typeof 'year');
console.log(typeof 1, typeof '1');
console.log(1 + '1');

let fruit = ['apple๐', 'oragne๐', 'banana๐'];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

const user = {
  name: 'Jay',
  age: 31,
};

console.log(user.name, user['age'], user.height); */
/* ๊ฐ์ฒด๋ ์๋ value ๋ฅผ ์ฐธ์กฐํด๋ undefined 
ํ์ง๋ง ์๋ value ์ value ๋ฅผ ์ฐธ์กฐํ๋ฉด ์๋ฌ */

const user02 = {
  name: '์ ์ฒ ',
  age: 40,
  height: 190,
};

const user03 = {
  name: '์ธ์',
  age: 33,
  height: 179,
};

console.log(
  `๋ ์ ์ ์ ๋์ด์ฐจ๋ ${Math.abs(user02.age - user03.age)} ์ด๊ณ  ํค์ ํฉ์ ${
    user02.height + user03.height
  } ์ด๋ค.`
);
