import { combineReducers } from "redux";

// !reducers
import counterReducer from "./counter/counterReducer";
import userReducer from "./user/userReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
  userState: userReducer,
  usersState: usersReducer,
});

export default rootReducer;
