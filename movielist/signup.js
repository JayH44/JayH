import { postUserAxios } from './admin.js';
document.querySelector('form').addEventListener('submit', postUserAxios);

// fetch('https://openapi.naver.com/v1/search/movie.json', {
//   mode: 'no-cors',
//   method: 'GET',
//   params: {
//     query: '어벤져스',
//   },
//   headers: {
//     'X-Naver-Client-Id': 'VHPbMPGzIGxr4yqCXkRT',
//     'X-Naver-Client-Secret': 'i1Z0wnuUcS',
//     'Access-Control-Allow-Origin': '*',
//   },
// }).then(console.log);

// async function postUser(e) {
//   e.preventDefault();
//   let emailVal = document.getElementById('email'),
//     userName = document.getElementById('username'),
//     passWord = document.getElementById('password'),
//     btnGet = document.getElementById('btnGet');

//   console.log(emailVal.value, userName.value, passWord.value);
//   try {
//     let result = await fetch('http://101.101.218.43/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: emailVal.value,
//         name: userName.value,
//         password: passWord.value,
//       }),
//     });
//     let json = await result.json();

//     console.log(json);
//     if (json.statusCode === 400) {
//       throw new Error(json.message);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
