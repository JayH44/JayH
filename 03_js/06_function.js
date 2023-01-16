function sum(a, b) {
  return a + b;
}

function mulptiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const res = divide(sum(2, 3), 2);
console.log(res);

let bar = function () {
  console.log('익명 함수');
};

bar();
