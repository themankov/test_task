import { ICard } from '../../modules/CardsBlock';
import { AppActionTypes } from '../store';

interface IinitialState {
  items: ICard[];
  totalCount: number;
}
const initialState: IinitialState = {
  items: [],
  totalCount: 0,
};
const BookReducer = (state = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case 'SET_ITEMS_PARAMS':
      debugger;
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload,
      };
    case 'SET_ITEMS':
      debugger;
      return {
        ...state,
        items: [...action.payload],
      };
    case 'DEFAULT_STATE':
      return initialState;

    default:
      return state;
  }
};
export default BookReducer;
