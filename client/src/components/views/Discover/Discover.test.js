import React from 'react';
import { shallow } from 'enzyme';
import { DiscoverComponent } from './Sale';

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<DiscoverComponent />);
    expect(component).toBeTruthy();
  });
});
