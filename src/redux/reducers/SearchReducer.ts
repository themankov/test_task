import { AppActionTypes } from '../store';
import { SortByType } from './../../services/BooksServices';
export type CategoryType =
  | 'all'
  | 'art'
  | 'biography'
  | 'computers'
  | 'history'
  | 'medical'
  | 'poetry';
interface IintialState {
  inputVal: string;
  sortBy: SortByType;
  category: CategoryType;
}
const initialState: IintialState = {
  inputVal: '',
  sortBy: 'relevance',
  category: 'all',
};
const SearchReducer = (state = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case 'SET_INPUT':
      return {
        ...state,
        inputVal: action.payload,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'DEFAULT_STATE':
      return initialState;

    default:
      return state;
  }
};
export default SearchReducer;
