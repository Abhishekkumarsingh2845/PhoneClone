import { combineReducers } from 'redux';
import counterReducer from './../Redux/Component';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers as needed
});

export default rootReducer;
