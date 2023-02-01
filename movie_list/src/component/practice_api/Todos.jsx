import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Todos() {
  const [todos, setTodos] = useState(null);
  const [text, setText] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/todos');
      setTodos(res.data);
    } catch (err) {
      alert('데이터를 받아오지 못했습니다');
      setTodos(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!todos) return <div>데이터가 없습니다.</div>;

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!text) {
      alert('할일을 입력해 주세요');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/todos', {
        text,
        done: false,
      });
      if (res.status === 201) alert('할일이 등록되었습니다.');
      fetchData();
    } catch (err) {
      console.log(err);
      alert('등록이 실패했습니다.');
    }
  };

  const toggleTodo = (id, done) => {
    axios
      .patch('http://localhost:5000/todos/' + id, {
        done,
      })
      .then(fetchData);
  };

  const deleteTodo = async (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      try {
        await axios.delete('http://localhost:5000/todos/' + id);
        fetchData();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <input onChange={handleInput} type='text' />
      <button onClick={handleSubmit}>등록</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done && 'line-through' }}
              onClick={() => toggleTodo(todo.id, !todo.done)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
