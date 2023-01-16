/* let result = 10 + 30;
console.log(result);

console.log(typeof result);
console.log(typeof 'year');
console.log(typeof 1, typeof '1');
console.log(1 + '1');

let fruit = ['apple🍊', 'oragne🍈', 'banana🍌'];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

const user = {
  name: 'Jay',
  age: 31,
};

console.log(user.name, user['age'], user.height); */
/* 객체는 없는 value 를 참조해도 undefined */

const user02 = {
  name: '정철',
  age: 40,
  height: 190,
};

const user03 = {
  name: '인수',
  age: 33,
  height: 179,
};

console.log(
  `두 유저의 나이차는 ${Math.abs(user02.age - user03.age)} 이고 키의 합은 ${
    user02.height + user03.height
  } 이다.`
);
