import React from 'react';
import { shallow } from 'enzyme';
import { ProductListComponent } from './ProductList';

const mockProps = {
  products: [
    { _id: '1', name: 'test ', img: 'abc.img', price: 5 },
    { _id: '2', name: 'test ', img: 'abc.img', price: 5 },
  ],
};

describe('Component ProductList', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductListComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
