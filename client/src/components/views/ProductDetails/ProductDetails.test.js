import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetailsComponent } from './ProductDetails';

const mockProps = {
  products: {
    _id: '8',
    name: 'test ',
    price: 10,
    description: 'test description',
    img: 'abc.jpg',
  },
};

describe('Component ProductDetails', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductDetailsComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
