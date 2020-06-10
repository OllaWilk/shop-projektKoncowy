import React from 'react';
import { shallow } from 'enzyme';
import { CartMenuComponent } from './CartMenu';

describe('Component CartBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartMenuComponent />);
    expect(component).toBeTruthy();
  });
});
