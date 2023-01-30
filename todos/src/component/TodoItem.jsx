import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiOutlineDelete,
} from 'react-icons/ai';

function TodoItem({ todo, dispatch }) {
  const removeTodo = (id) => {
    if (window.confirm('삭제하시겠습니까?'))
      dispatch({ type: 'REMOVE_TODO', id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };
  return (
    <Container done={todo.done}>
      <p onClick={() => toggleTodo(todo.id)}>
        {' '}
        {todo.done ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        {todo.text}
      </p>
      <Button onClick={() => removeTodo(todo.id)}>
        <AiOutlineDelete />
      </Button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};

  p {
    display: flex;
    flex: 1;
    text-decoration: ${({ done }) => (done ? 'line-through 1px' : 'none')};
    align-items: center;

    cursor: pointer;
    svg {
      margin-right: 10px;
      fill: ${({ theme }) => theme.colors.main_color};
    }
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    fill: red;
    opacity: 0;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export default TodoItem;
