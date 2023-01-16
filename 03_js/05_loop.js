for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 구구단 2단에서 9단까지

for (let i = 2; i < 10; i++) {
  console.log(`
  --------${i}단--------
  `);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
