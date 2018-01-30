const initialState = {
  num:0,
}

function add(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        num: state.num + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        num: state.num - 1,
      }
    default:
      return {
        ...state
      }
  }
}

export default add;
