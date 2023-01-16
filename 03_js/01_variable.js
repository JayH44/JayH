let num01 = 10;
let num02 = 20;

console.log('Original num01 is', num01, 'num02 is', num02);

let temp01 = num01;
let temp02 = num02;

num01 = temp02;
num02 = temp01;

console.log(`Changed num01 is ${num01} num02 is ${num02}`);

/* 파스칼 케이스: 카멜 케이스에서  첫글자만 대문자 */

// console.log(b); //호이스팅은 일어나나 TDZ로 인해 오류발생
let b = 10;
