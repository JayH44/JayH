export function counterReducer(state, action) {
  const { count, amount } = state;
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: count + amount };

    case 'DECREMENT':
      return { ...state, count: count - amount };

    case 'CHANGE_AMOUNT':
      return { ...state, amount: action.amount };

    default:
      return state;
  }
}
