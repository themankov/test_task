import { ThunkAction } from 'redux-thunk';
import { ICard, ICardDescription } from '../../modules/CardsBlock';
import { BookServices } from '../../services';
import { AppActionTypes } from '../store';
const SET_ITEM_BY_ID = 'SET_ITEM_BY_ID';
const SET_DEFAULT_STATE = 'SET_DEFAULT_STATE';
export interface IgetItemById {
  type: typeof SET_ITEM_BY_ID;
  payload: ICardDescription;
}
export interface IgetDefaultState {
  type: typeof SET_DEFAULT_STATE;
}
const Actions = {
  getItemById: (items: ICard): AppActionTypes => ({
    type: SET_ITEM_BY_ID,
    payload: items.volumeInfo,
  }),
  getDefaultState: (): AppActionTypes => ({
    type: SET_DEFAULT_STATE,
  }),
  asyncGetItemById: (
    id: string
  ): ThunkAction<void, any, null, AppActionTypes> => {
    return async (dispatch: any): Promise<void> => {
      new BookServices()
        .getBookById(id)
        .then((data) => {
          dispatch(Actions.getItemById(data));
        })
        .catch((e) => {
          console.log(e);
        });
    };
  },
};
export default Actions;
