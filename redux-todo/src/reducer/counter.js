import { createSlice } from '@reduxjs/toolkit';

// 1번방식: 액선 정의, 액선 생성, 리듀서정의

/* const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increaseNum = () => ({ type: INCREASE });
export const decreaseNum = () => ({ type: DECREASE });

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case increasement.type:
      return state + action.payload;
    case decreasement.type:
      return state - action.payload;
    default:
      return state;
  }
}
 */

// 2번방식 createAction + createReducer 방식

/* export const increasement = createAction('counter/INCREASE');
export const decreasement = createAction('counter/DECREASE');

const counter = createReducer(0, {
  [increasement.type]: (state, action) => state + action.payload,
  [decreasement.type]: (state, action) => state - action.payload,
});

const counter = createReducer(0, (builder) => {
  builder
    .addCase(increasement, (state, action) => state + action.payload)
    .addCase(decreasement, (state, action) => state - action.payload);
}); */

// 3번방식 createSlice 방식

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increasement: (state, action) => state + action.payload,
    decreasement: (state, action) => state - action.payload,
  },
});

export const { increasement, decreasement } = counterSlice.actions;
const counter = counterSlice.reducer;

export default counter;
