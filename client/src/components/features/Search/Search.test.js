import React from 'react';
import { shallow } from 'enzyme';
import { SearchComponent } from './Search';

describe('Component Button', () => {
  it('should render without crashing', () => {
    const component = shallow(<SearchComponent />);
    expect(component).toBeTruthy();
  });
});
