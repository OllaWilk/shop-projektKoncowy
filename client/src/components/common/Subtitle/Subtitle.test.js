import React from 'react';
import { shallow } from 'enzyme';
import { SubtitleComponent } from './Subtitle';

describe('Component Title', () => {
  it('should render without crashing', () => {
    const component = shallow(<SubtitleComponent />);
    expect(component).toBeTruthy();
  });
});
