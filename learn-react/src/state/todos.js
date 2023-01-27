let nextID = 4;
export function todosReducer(state, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return [...state, { id: nextID++, text: action.text, done: false }];

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);

    case 'CHANGE_TODO':
      return state.map((todo) =>
        // if (todo.id === action.id) todo.done = !todo.done;
        // return { ...todo };
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
