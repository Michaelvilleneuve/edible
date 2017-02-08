import { combineReducers } from 'redux';
import AskReducer from './AskReducer';

export default combineReducers({
  ask: AskReducer
});
