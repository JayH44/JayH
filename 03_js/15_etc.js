function sum(a, b) {
  return a + b;
}

function sumTotatl(...nums) {
  return nums.reduce(sum);
}

console.log(sumTotatl(1, 2, 3, 4, 5, 10));
let numArr = [1, 2, 3, 4, 5];
console.log(...numArr);
console.log(Math.max(...numArr));

let newArr = [0, ...numArr, 10];
console.log(newArr);

let obj = {
  name: 'seok',
  age: 31,
};

let copy = { ...obj };
copy.age = 41;
console.log(obj, copy);

let { userName, age } = obj;

userName = 'Jay';
console.log(userName, age, obj.name);
