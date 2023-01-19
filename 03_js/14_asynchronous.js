// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 3));

// function printNum(callback) {
//   let result = callback();
//   console.log(result);
// }

// printNum(() => sum(2, 3));

// console.log('실행');

// setTimeout(function () {
//   console.log('2초경과');
// }, 2000);

// console.log('실행완료');

// let data = null;
// setTimeout(function () {
//   data = '받아온 데이터';
//   render(data);
// }, 2000);

// function render(data) {
//   console.log(data + ' 렌더링!');
// }

// let data02 = null;

// let promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (!data02) {
//       rej('찾는 데이터가 없음');
//     }
//     res('데이터');
//   }, 2000);
// });

// console.log(promise);
// setTimeout(() => console.log(promise), 2000);

// promise
//   .then((res) => {
//     console.log('result: ' + res);
//   })
//   .catch((err) => console.log(err));

let movieList = [
  { id: 1, title: '슬램덩크', actors: ['서태웅', '정대만', '채치수'] },
  {
    id: 2,
    title: '아바타2',
    actors: ['조샐디나', '샘워싱턴', '사고나위버'],
  },
  { id: 3, title: '유령', actors: ['설경구', '이하니', '박소담'] },
  { id: 4, title: '아바타1', actors: ['몰라'] },
  { id: 5, title: '슬램덩크2', actors: ['서태웅', '정대만', '채치수'] },
];

function getMovieById(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let movie = movieList.find((mov) => mov.id === id);
      if (!movie) rej('찾는 id 가 없음');

      res(movie);
    }, 2000);
  });
}

// getMovieById(2).then(console.log).catch(console.log);

let formElem = document.querySelector('form'),
  inputWindow = document.querySelector('form input'),
  movieZip = document.querySelector('.movieZip');

inputWindow.focus();
formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputWindow.value === '') {
    inputWindow.focus();
    return;
  }

  //   getMovieByTitle(inputWindow.value)
  //     .then((res) => {
  //       movieZip.innerHTML = '';
  //       res.forEach(renderMovie);
  //     })
  //     .catch(alert);

  renderMovie02(inputWindow.value).catch(alert);
  inputWindow.value = '';
  inputWindow.focus();
});

function getMovieByTitle(title) {
  return new Promise((res, rej) => {
    // let movie = movieList.find((mov) => mov.title.includes(title));
    // if (!movie) rej('찾는 제목의 영화가 없습니다.');

    // res(movie);

    let movie = movieList.filter((mov) => mov.title.includes(title));
    if (movie.length === 0) rej('찾는 제목의 영화가 없습니다.');

    res(movie);
  });
}

function renderMovie(movie) {
  movieZip.innerHTML += `<li>
    <h2>${movie.title}</h2>    
    <p>출연진: ${movie.actors}</p>    
  </li>`;
}

async function renderMovie02(title) {
  let result = await getMovieByTitle(title);
  movieZip.innerHTML = '';
  result.forEach(renderMovie);
}

// renderMovie02('아바타');

// async function getMovieByTitleAsync(title) {
//   let movie = movieList.filter((mov) => mov.title.includes(title));
//   if (movie.length === 0) rej('찾는 제목의 영화가 없습니다.');

//   return movie;
// }
