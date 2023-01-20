// console.log(Window);
// console.log(global);

// globalThis.console.log('console...');

// const today = new Date();
// console.log('time is', today);

// console.log(today.getFullYear(), today.getMonth() + 1, today.getDate());
// const dateStr = today.toLocaleDateString('ko-KR', {
//     //   year: 'numeric',
//     //   month: 'narrow',
//     //   day: 'numeric',
//     dateStyle: 'full',
//   }),
//   timeStr = today.toLocaleTimeString('ko-kR', {
//     timeStyle: 'full',
//   });

// console.log(dateStr, timeStr);

// const yesterDay = new Date('2023-01-18');
// yesterDay.setFullYear('2022');
// yesterDay.setDate(yesterDay.getDate() - 1);
// yesterDay.setMonth(7);

// console.log(yesterDay);

// const floatNum = 1.51;
// console.log(Math.floor(floatNum));
// console.log(Math.ceil(floatNum));
// console.log(Math.round(1.41), Math.round(1.51));
// console.log(Math.random());

// const num = 121;
// console.log(Math.ceil(num + 0.1));
// console.log(Math.ceil(num / 10) * 10);

let result = [],
  result01 = [],
  popedNum = 0,
  i = 0,
  b = 0;

while (i < 6) {
  popedNum = Math.floor(Math.random() * 45) + 1;

  if (!result.includes(popedNum)) {
    result.push(popedNum);
    i++;
  } else {
    result01.push(popedNum);
  }
  b++;
}

const finalResult = result.sort((a, b) => a - b);
console.log(
  `Method1, 최종결과: ${finalResult} 반복횟수: ${b}, 중복숫자: ${result01}, 중복횟수 ${
    b - i
  }`
);

let numArr = Array.from({ length: 45 }, (_, idx) => idx + 1),
  result02 = [];

for (let i = 0; i < 6; i++) {
  popedNum = Math.floor(Math.random() * numArr.length);
  result02.push(numArr.splice(popedNum, 1));
}

const finalResult02 = result02.sort((a, b) => a - b);
console.log(`Method2, 최종결과: ${finalResult02}`);
