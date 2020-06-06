import React from 'react';
import { shallow } from 'enzyme';
import { SideBarComponent } from './SideBar';

describe('Component ShopSort', () => {
  it('should render without crashing', () => {
    const component = shallow(<SideBarComponent />);
    expect(component).toBeTruthy();
  });
});
