import { combineReducers } from "redux";
import statesReducer from "./statesReducer";

const reducers = combineReducers({
  stateVals: statesReducer,
});

export default reducers;
