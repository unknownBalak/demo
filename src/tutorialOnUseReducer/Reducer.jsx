

export const initialState = {count: 4};

export function reducerFn (state, action) {
      
  switch (action.id) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}