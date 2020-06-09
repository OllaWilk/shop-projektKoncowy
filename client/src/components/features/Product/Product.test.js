import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const mockProps = {
  _id: '1',
  name: 'test title',
  price: 5,
  img: 'abc.jpg',
};

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
