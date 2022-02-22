import React from 'react';
import RestaurantScreen from './components/RestaurantScreen';
import {Provider} from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <RestaurantScreen />
  </Provider>
);

export default App;
