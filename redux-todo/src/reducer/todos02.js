import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodo } from '../api/todos';

export const fetchData = createAsyncThunk('fetchData', getTodo);

const todoSlices = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    createTodo: {
      reducer: (state, action) => state.concat(action.payload),
      prepare: (text) => ({ payload: { id: nanoid(), text, done: false } }),
    },
    removeTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload.id),
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.done = !todo.done;
      //   state.map((todo) =>
      //     todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (_, action) => action.payload)
      .addCase(fetchData.pending, () => [
        { id: 1, text: '로딩중', done: false },
      ])
      .addCase(fetchData.rejected, () => [
        { id: 1, text: '실패', done: false },
      ]);
  },
});

export const { createTodo, removeTodo, toggleTodo } = todoSlices.actions;

const todo = todoSlices.reducer;

export default todo;
