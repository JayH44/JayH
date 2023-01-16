// if (true) {
//   console.log('true 입니다');
// }

const user = {
  age: 30,
  height: 175,
  gender: 'male',
  name: 'Jay',
};

if (user.gender === 'male' && user.age >= 20) {
  console.log(user.name);
}

let num = 10;

if (num % 2) {
  console.log('홀수 입니다.');
} else {
  console.log('짝수 입니다.');
}

num % 2
  ? console.log(`${num}은 홀수 입니다.`)
  : console.log(`${num}은 짝수 입니다.`);

const data = 'Jay';
switch (typeof data) {
  case 'number':
    console.log(`${data}은 숫자형 데이터 입니다.`);
    break;
  case 'string':
    console.log(`${data}은 문자열 데이터 입니다.`);
    break;

    defalut: console.log('default 실행');
}

const score = 100;

switch (Math.floor(score / 10)) {
  case 10:
  case 9:
    console.log(`${score}점은 A등급 입니다.`);
    break;
  case 8:
    console.log(`${score}점은 B등급 입니다.`);
    break;
  case 7:
    console.log(`${score}점은 C등급 입니다.`);
    break;
  case 6:
    console.log(`${score}점은 D등급 입니다.`);
    break;
  default:
    console.log(`${score}점은 F등급 입니다.`);
}

const user02 = {
  a: 1,
};

if (!user02.weight) {
  console.log('없는 프로퍼티 입니다.');
}

// 단축 평가, &&, ||
