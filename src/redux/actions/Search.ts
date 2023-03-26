import { SortByType } from '../../services/BooksServices';
import { CategoryType } from '../reducers/SearchReducer';
import { AppActionTypes } from '../store';
const SET_INPUT = 'SET_INPUT';
const DEFAULT_STATE = 'DEFAULT_STATE';
const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';
export interface ISetInputVal {
  type: typeof SET_INPUT;
  payload: string;
}
export interface ISetCategory {
  type: typeof SET_CATEGORY;
  payload: CategoryType;
}
export interface ISetSortBy {
  type: typeof SET_SORT_BY;
  payload: SortByType;
}
const Actions = {
  setInputVal: (data: string): AppActionTypes => ({
    type: SET_INPUT,
    payload: data,
  }),
  setSortBy: (data: SortByType): AppActionTypes => ({
    type: SET_SORT_BY,
    payload: data,
  }),
  setCategory: (data: CategoryType): AppActionTypes => ({
    type: SET_CATEGORY,
    payload: data,
  }),
  setDefaultState: (): AppActionTypes => {
    return {
      type: DEFAULT_STATE,
    };
  },
};
export default Actions;
