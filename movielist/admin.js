let instance = axios.create({
  baseURL: 'http://101.101.218.43',
});

export async function postUserAxios(e) {
  e.preventDefault();
  let email = document.getElementById('email').value,
    name = document.getElementById('username').value,
    password = document.getElementById('password').value,
    btnGet = document.getElementById('btnGet');

  console.log(email, name, password);
  try {
    let result = await instance.post('/users', {
      email,
      name,
      password,
    });

    if (result.status === 201) {
      alert('회원가입에 성공하셨습니다.');
      window.location.href = './login.html';
    }
  } catch (e) {
    console.log(e);
  }
}

export async function postSignIn(e) {
  e.preventDefault();
  let email = document.getElementById('email').value,
    password = document.getElementById('password').value;

  try {
    let result = await instance.post('/users/login', {
      email,
      password,
    });

    if (result.status === 201) {
      alert('로그인에 성공하셨습니다.');

      // instance.token = result.data.data.token;
      localStorage.setItem('access-token', result.data.data.token);
      window.location.href = './index.html';
    }
    console.log(result);
  } catch (e) {
    alert(e);
  }
}

export async function getUsers(page) {
  let token = localStorage.getItem('access-token');
  let result = await instance.get(`/users?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  result.data.data.forEach((user) => {
    document.body.innerHTML += `<div class="userItem">
    <div class="imgBox">   
    <img src="${user.profile_url}"></div>
    ${user.name}: ${user.email} 
    </img></div>`;
  });
  console.log(result);
}

export async function getPosts(page) {
  let token = localStorage.getItem('access-token');
  let result = await instance.get(`/posts?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  result.data.data.forEach((user) => {
    document.body.innerHTML += `<div class="userItem">
    ${user.id}, ${user.content}, ${user.like_count}
    </div>`;
  });

  console.log(result);
}
