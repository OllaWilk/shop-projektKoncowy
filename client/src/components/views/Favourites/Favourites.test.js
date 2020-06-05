import React from 'react';
import { shallow } from 'enzyme';
import { FavouritesComponent } from './Favourites';

describe('Component Favourites', () => {
  it('should render without crashing', () => {
    const component = shallow(<FavouritesComponent />);
    expect(component).toBeTruthy();
  });
});
