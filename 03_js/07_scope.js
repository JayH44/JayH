// var 는 스코프 무시
// 함수에서는 var 스코프 적용됨

function outer() {
  let x = 10;
  function inner(y) {
    return x + y;
  }
  return inner;
}

let call = outer();

console.log(call(5));
console.log(call(10));
