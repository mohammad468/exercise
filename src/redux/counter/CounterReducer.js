const initialStale = {
  counter: 0,
};

const reducer = (state = initialStale, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
export default reducer;
