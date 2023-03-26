import { combineReducers } from 'redux';
import BookReducer from './BookReducer';
import SearchReducer from './SearchReducer';
import CardReducer from './CardReducer';
export const rootReducer = combineReducers({
  BookReducer,
  SearchReducer,
  CardReducer,
});
