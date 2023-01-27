import React, { useReducer } from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import { todosReducer } from '../../state/todos';

const initialState = [
  { id: 1, text: '컴포넌트 작성하기', done: false },
  { id: 2, text: '기능 구현하기', done: false },
  { id: 3, text: '리팩토링 하기', done: false },
];

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div>
      <TodoCreate dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default Todos;
