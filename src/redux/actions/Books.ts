import { BookServices } from '../../services';
import { ThunkAction } from 'redux-thunk';
import { AppActionTypes } from '../store';
import { ICard } from '../../modules/CardsBlock';
import { SortByType } from '../../services/BooksServices';
import { CategoryType } from '../reducers/SearchReducer';
const SET_ITEMS = 'SET_ITEMS';
const DEFAULT_STATE = 'DEFAULT_STATE';
const SET_ITEMS_PARAMS = 'SET_ITEMS_PARAMS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export interface SetItemsInterface {
  type: typeof SET_ITEMS;
  payload: ICard[];
}
export interface SetItemsByParamInterface {
  type: typeof SET_ITEMS_PARAMS;
  payload: ICard[];
}
export interface DEFAULT_STATE_Interface {
  type: typeof DEFAULT_STATE;
}
export interface SET_ITEM_COUNT_Interface {
  type: typeof SET_TOTAL_COUNT;
  payload: number;
}

const Actions = {
  setItems: (items: any): AppActionTypes => ({
    type: SET_ITEMS,
    payload: items,
  }),
  setTotalCount: (items: number): AppActionTypes => ({
    type: SET_TOTAL_COUNT,
    payload: items,
  }),
  setItemsByParam: (items: any): AppActionTypes => ({
    type: SET_ITEMS_PARAMS,
    payload: items,
  }),
  setDefaultState: (): AppActionTypes => {
    return {
      type: DEFAULT_STATE,
    };
  },
  asyncSetItemsByParam: (
    initial: boolean,
    sortBy: SortByType,
    category: CategoryType,
    inputValue?: string,
    offset?: number
  ): ThunkAction<void, any, null, AppActionTypes> => {
    return async (dispatch: any): Promise<void> => {
      new BookServices()
        .getBooks(
          inputValue ? inputValue : '',
          offset ? offset : 0,
          sortBy,
          category
        )
        .then((data) => {
          dispatch(Actions.setTotalCount(data.totalItems));
          if (initial) {
            dispatch(Actions.setItems(data.items));
          } else {
            dispatch(Actions.setItemsByParam(data.items));
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
  },
};
export default Actions;
