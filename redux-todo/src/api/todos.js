import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodo = async () => {
  let { data } = await axios.get('http://localhost:5000/todos');
  return data;
};

export const postTodo = async (text) => {
  let result = await axios.post('http://localhost:5000/todos', {
    id: nanoid(),
    text,
    done: false,
  });
  return result;
};

export const deleteTodo = async (id) => {
  let result = await axios.delete('http://localhost:5000/todos' + id);
  return result;
};

export const updateTodo = async () => {};
