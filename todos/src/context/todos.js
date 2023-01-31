import { createContext, useContext, useReducer } from 'react';

// export const NumContext = createContext(0);
// export const StrContext = createContext('기본값');

export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

const initalState = [
  { id: 1, text: '투두리스트 스타일링', done: true },
  { id: 2, text: '투두리스트 기능 구현', done: false },
  { id: 3, text: '투두리스트 하기', done: false },
];

function reducer(state, action) {
  switch (action.type) {
    case 'SUBMIT_TODO':
      return state.concat({
        id: action.nextId.current++,
        text: action.text,
        done: false,
      });
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initalState);
  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
      ;
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error('Provider 없음');
  return context;
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
