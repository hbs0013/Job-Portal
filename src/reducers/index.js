import { combineReducers } from "redux";
import actionReducer from "./actionReducer";
import signUpReducer from "./signUpReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
    actionReducer, signUpReducer, jobReducer
});