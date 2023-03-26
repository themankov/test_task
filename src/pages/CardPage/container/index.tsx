import { connect } from 'react-redux';
import { CardAction } from '../../../redux/actions';

import { RootState } from '../../../redux/store';

import CardPage from './../index';

const mapStateToProps = ({ CardReducer }: RootState) => {
  return {
    item: CardReducer.items,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getItemById: (id: string) => {
      dispatch(CardAction.asyncGetItemById(id));
    },
    getInitial: () => {
      dispatch(CardAction.getDefaultState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
