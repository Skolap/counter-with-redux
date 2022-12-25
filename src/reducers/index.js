// Root Reducer
// Import all reducer
import changeTheNumber from "./upDown";

// Combine reducer using combineReducers Hook
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
});

// Export root reducer
export default rootReducer;
