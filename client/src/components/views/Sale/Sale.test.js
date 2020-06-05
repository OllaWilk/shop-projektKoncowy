import React from 'react';
import { shallow } from 'enzyme';
import { SaleComponent } from './Sale';

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<SaleComponent />);
    expect(component).toBeTruthy();
  });
});
