const initialStale = {
  data: {
    name: "",
    family: "",
    age: 0,
    score: 0,
  },
};

const userReducer = (state = initialStale, action) => {
  switch (action.type) {
    case "SHOW_MOHAMMAD":
      return {
        ...state,
        data: {
          name: "mohammad",
          family: "mohseni",
          age: 22,
          score: 20,
        },
      };
    case "SHOW_ALI":
      return {
        ...state,
        data: {
          name: "Ali",
          family: "Shishegar",
          age: 20,
          score: 18,
        },
      };
    default:
      return state;
  }
};
export default userReducer;
