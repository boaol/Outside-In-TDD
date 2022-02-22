import {Action, combineReducers} from 'redux';
import {Restaurant} from '../../types';

import {STORE_RESTAURANTS} from './actions';

const records = (state = [], action: Action & {records: Array<Restaurant>}) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    default:
      return state;
  }
};

export default combineReducers({
  records,
});
