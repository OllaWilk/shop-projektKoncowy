import React from 'react';
import { shallow } from 'enzyme';
import { ProductSearchComponent } from './ProductSearch';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductSearchComponent />);
    expect(component).toBeTruthy();
  });
});
