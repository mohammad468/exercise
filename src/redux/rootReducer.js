import { combineReducers } from "redux";

// !reducers
import counterReducer from "./counter/counterReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
  userState: userReducer,
});

export default rootReducer;
