import { connect } from 'react-redux';
import { BookActions } from '../../../redux/actions';

import CardsBlock from './../index';

import { RootState } from '../../../redux/store';
import { SortByType } from '../../../services/BooksServices';
import { CategoryType } from '../../../redux/reducers/SearchReducer';

const mapStateToProps = ({ BookReducer, SearchReducer }: RootState) => {
  return {
    items: BookReducer.items,
    input: SearchReducer.inputVal,
    totalCount: BookReducer.totalCount,
    sortBy: SearchReducer.sortBy,
    category: SearchReducer.category,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setItemsByParam: (
      initial: boolean,
      sortBy: SortByType,
      category: CategoryType,
      inputValue?: string,
      offset?: number
    ) => {
      dispatch(
        BookActions.asyncSetItemsByParam(
          initial,
          sortBy,
          category,
          inputValue,
          offset
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsBlock);
