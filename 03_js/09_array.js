let arr = [1, 2, 3, 4];
arr[10] = 5;
// console.log(arr);
// console.log(arr.length);

arr = [1, 2, 3, 4, 5];

console.log('원본배열', arr);

arr.push(6);
console.log('push배열', arr);

let popedNum = arr.pop();
console.log('pop배열', arr, popedNum);

arr.unshift(0);
console.log('unshift배열', arr);

let shiftedNum = arr.shift();
console.log('shift배열', shiftedNum, arr);

let deletedE = arr.splice(1, 2);
console.log('splice배열', arr, deletedE);

// let sliceNum = arr.slice(0, 2);
// console.log('slice배열', arr, sliceNum);

arr.splice(1, 0, 2, 3);
console.log('splice배열', arr);

let fruits = ['orange', 'apple', 'banana'];
let sliceNum = fruits.slice(0, 2);
console.log(fruits, sliceNum);

function arrayConsole(array) {
  for (let i in array) {
    console.log('for in', array[i]);
  }
}

arrayConsole(fruits);
fruits.forEach((arr) => console.log('forEach', arr));

const arrE = {
  array: ['orange', 'apple', 'banana', 'strawberry'],
  arrConsole: function () {
    for (let i in this.array) {
      console.log('this for in method', this.array[i]);
    }
  },
};

arrE.arrConsole();

const arrE2 = {
  array: ['orange2', 'apple2', 'banana2', 'strawberry2'],
  arrConsole: function () {
    this.array.map((arr) => console.log('this map', arr));
  },
};

arrE2.arrConsole();

let userList = [
  { id: 1, name: 'seok', age: 31 },
  { id: 2, name: 'minsu', age: 29 },
  { id: 3, name: 'chelsu', age: 38 },
];

//fillter 는 조건에 맞는 배열 리턴

let modifiedList = userList.filter((user) => user.age > 30);
console.log(modifiedList);

const result03 = userList.filter((_, idx) => idx % 2).map((user) => user.name);
console.log(result03);

//메서드 체이닝
