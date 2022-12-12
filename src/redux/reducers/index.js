import roll from "./RollReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    roll,
});

export default allReducers;