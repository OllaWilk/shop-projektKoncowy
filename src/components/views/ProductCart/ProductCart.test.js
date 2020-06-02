import React from 'react';
import { shallow } from 'enzyme';
import { ProductCartComponent } from './ProductCart';

describe('Component ProductCart', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductCartComponent />);
    expect(component).toBeTruthy();
  });
});
