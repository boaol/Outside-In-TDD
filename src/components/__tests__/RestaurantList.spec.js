import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  const restaurants = [
    {id: 1794, name: 'Pasta Place'},
    {id: 1795, name: 'Salad Place'},
  ];
  let loadRestaurants;
  let context;

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName('loadRestaurants');

    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });
  it('loads restaurants on first render', () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    const {queryByText} = context;
    +expect(queryByText('Pasta Place')).not.toBeNull();
    expect(queryByText('Salad Place')).not.toBeNull();
  });
});
