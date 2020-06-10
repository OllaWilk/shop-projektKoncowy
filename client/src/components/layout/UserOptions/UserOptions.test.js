import React from 'react';
import { shallow } from 'enzyme';
import { UserOptionsComponent } from './UserOptions';

const mockProps = {
  cart: {
    products: [],
    amount: 5,
  },
};

describe('Component UserOptions', () => {
  it('should render without crashing', () => {
    const component = shallow(<UserOptionsComponent {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});
