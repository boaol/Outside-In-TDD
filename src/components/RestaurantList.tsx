import React, {useEffect} from 'react';
import {connect, RootStateOrAny} from 'react-redux';
import {Restaurant} from '../types';
import {loadRestaurants} from '../store/restaurants/actions';

type Props = {
  loadRestaurants: () => void;
  restaurants: Array<Restaurant>;
};

export const RestaurantList = ({loadRestaurants, restaurants}: Props) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: RootStateOrAny) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
