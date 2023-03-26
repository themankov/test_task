import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  DEFAULT_STATE_Interface,
  SetItemsByParamInterface,
  SetItemsInterface,
  SET_ITEM_COUNT_Interface,
} from './actions/Books';
import { IgetDefaultState, IgetItemById } from './actions/Card';
import { ISetCategory, ISetInputVal, ISetSortBy } from './actions/Search';
import { rootReducer } from './reducers';
export type AppActionTypes =
  | SetItemsInterface
  | DEFAULT_STATE_Interface
  | ISetInputVal
  | SetItemsByParamInterface
  | SET_ITEM_COUNT_Interface
  | ISetSortBy
  | ISetCategory
  | IgetItemById
  | IgetDefaultState;
const middleware = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
