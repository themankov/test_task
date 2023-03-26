import { AppActionTypes } from '../store';
import { ICardDescription } from './../../modules/CardsBlock/index';
export interface IinitialState {
  items: ICardDescription[];
}
const initialState: IinitialState = {
  items: [],
};
const CardReducer = (state = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case 'SET_ITEM_BY_ID':
      return {
        ...state,
        items: [action.payload],
      };

    case 'SET_DEFAULT_STATE':
      return initialState;

    default:
      return state;
  }
};
export default CardReducer;
