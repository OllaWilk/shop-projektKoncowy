import React from 'react';
import { shallow } from 'enzyme';
import { UserOptionsComponent } from './UserOptions';

describe('Component UserOptions', () => {
  it('should render without crashing', () => {
    const component = shallow(<UserOptionsComponent />);
    expect(component).toBeTruthy();
  });
});
