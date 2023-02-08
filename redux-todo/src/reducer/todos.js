import { createSelector, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    text: '리덕스 배우기',
    done: true,
  },
  {
    id: 2,
    text: '리덕스 응용하기',
    done: false,
  },
  {
    id: 3,
    text: '리덕스로 todos 만들기',
    done: false,
  },
];

const CREATE = 'CREATE_TODO';
const REMOVE = 'REMOVE_TODO';
const TOGGLE = 'TOGGLE_TODO';

export const createTodo = (text) => ({
  type: CREATE,
  text,
});

export const removeTodo = (id) => ({
  type: REMOVE,
  id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE,
  id,
});

const getTodos = (state) => state.todo;
export const getUndoneCount = createSelector(
  getTodos,
  (state) => state.filter((todo) => !todo.done).length
);

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return state.concat({ id: nanoid(), text: action.text, done: false });
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
