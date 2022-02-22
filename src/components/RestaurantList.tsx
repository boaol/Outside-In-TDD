import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, {useEffect} from 'react';
import {connect, RootStateOrAny} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
import {Restaurant} from '../types';

type Props = {
  loadRestaurants: () => void;
  restaurants: Array<Restaurant>;
};

export const RestaurantList = ({loadRestaurants, restaurants}: Props) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <List>
      {restaurants.map(restaurant => (
        <ListItem key={restaurant.id}>
          <ListItemText>{restaurant.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state: RootStateOrAny) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
