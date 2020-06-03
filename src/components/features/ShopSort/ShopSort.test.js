import React from 'react';
import { shallow } from 'enzyme';
import { ShopSortComponent } from './ShopSort';

describe('Component ShopSort', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShopSortComponent />);
    expect(component).toBeTruthy();
  });
});
