import React from 'react';

function TodoList({ todos, dispatch }) {
  const handleRemove = (id) => {
    if (window.confirm('삭제하시겠습니까?'))
      dispatch({ type: 'DELETE_TODO', id });
  };

  const toggleText = (id) => {
    dispatch({ type: 'CHANGE_TODO', id });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done && 'line-through' }}
              onClick={() => toggleText(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
