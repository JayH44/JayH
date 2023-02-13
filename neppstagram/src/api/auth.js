import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://101.101.218.43',
});

const token = localStorage.getItem('access-token') || '';

authAxios.defaults.headers.Authorization = `Bearer ${token}`;

export const signUpUser = async (form) => {
  try {
    const { data } = await authAxios.post('users', form);
    return data;
  } catch (e) {
    throw new Error('회원가입에 실패했습니다.');
  }
};

export const loginUser = async (form) => {
  try {
    const { data } = await authAxios.post('users/signin', form);

    const { token } = data;
    localStorage.setItem('access-token', token);
    authAxios.defaults.headers.Authorization = `Bearer ${token}`;
    return { success: true };
  } catch (e) {
    throw new Error('로그인에 실패했습니다.');
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await authAxios.get('users/current');
    return data;
  } catch (e) {
    throw new Error('로그인이 되어있지 않습니다.');
  }
};

export const getUsers = async (page) => {
  try {
    const result = await authAxios.get('users?page=' + page);
    return result;
  } catch (e) {
    throw new Error('유저 조회에 실패했습니다.');
  }
};

export const getPosts = async (page) => {
  try {
    const result = await authAxios.get('posts?page=' + page);
    return result;
  } catch (e) {
    throw new Error('게시글 조회에 실패했습니다.');
  }
};

export const getPostsbyUserId = async (page, id) => {
  try {
    const result = await authAxios.get('posts?page=' + page + '&userId=' + id);
    return result;
  } catch (e) {
    throw new Error('게시글 조회에 실패했습니다.');
  }
};

export const getPostbyId = async (Id) => {
  try {
    const result = await authAxios.get('posts/' + Id);
    return result;
  } catch (e) {
    throw new Error('게시글 조회에 실패했습니다.');
  }
};

export const patchProfile = async (form) => {
  try {
    const { data } = await authAxios.patch('users/profile', form);
    return data;
  } catch (e) {
    throw new Error('프로필 사진 등록에 실패했습니다.');
  }
};

export const createPost = async (form) => {
  try {
    const { data } = await authAxios.post('/posts', form);
    return data;
  } catch (e) {
    throw new Error('포스트 등록에 실패했습니다.');
  }
};

export const getUserbyName = async (page, name) => {
  try {
    const result = await authAxios.get(
      'users/search?name=' + name + '?page=' + page
    );
    return result;
  } catch (e) {
    throw new Error('이름으로 유저 조회에 실패했습니다.');
  }
};

export const getUserbyId = async (id) => {
  try {
    const result = await authAxios.get('users/' + id);
    return result;
  } catch (e) {
    throw new Error('아이디로 유저 조회에 실패했습니다.');
  }
};
