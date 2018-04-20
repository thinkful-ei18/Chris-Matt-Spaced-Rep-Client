import React from 'react';
import {shallow, mount} from 'enzyme';

import {RegistrationPage} from './registration-page';
import {RegistrationForm} from './registration-form';

describe('<RegistrationPage />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<RegistrationPage />);
    shallow(<RegistrationForm handleSubmit={dispatch} />);
  });

  it('Should register user when Register is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <RegistrationForm handleSubmit={dispatch} />
    );
    const instance = wrapper.instance();
    expect(wrapper.find('button').length).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(dispatch).toHaveBeenCalled;
  });
});