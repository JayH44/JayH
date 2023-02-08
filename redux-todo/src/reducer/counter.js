const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increaseNum = () => ({ type: INCREASE });
export const decreaseNum = () => ({ type: DECREASE });

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
