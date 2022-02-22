import {Dispatch} from 'redux';
import {Restaurant} from '../../types';
import {API} from '../../api';
import {RootStateOrAny} from 'react-redux';

export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants =
  () => (dispatch: Dispatch, getState: () => RootStateOrAny, api: API) => {
    api.loadRestaurants().then((records: Array<Restaurant>) => {
      dispatch(storeRestaurants(records));
    });
  };

const storeRestaurants = (records: Array<Restaurant>) => ({
  type: STORE_RESTAURANTS,
  records,
});
