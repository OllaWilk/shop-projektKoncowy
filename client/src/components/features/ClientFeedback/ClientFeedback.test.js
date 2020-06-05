import React from 'react';
import { shallow } from 'enzyme';
import { ClientFeedbackComponent } from './ClientFeedback';

describe('Component ClientFeedback', () => {
  it('should render without crashing', () => {
    const component = shallow(<ClientFeedbackComponent />);
    expect(component).toBeTruthy();
  });
});
