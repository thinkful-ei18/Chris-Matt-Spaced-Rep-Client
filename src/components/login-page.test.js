import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginPage} from './login-page';
import {LoginForm} from './login-form';
import { login } from '../actions/auth';

describe('<LoginPage />', () => {
    it('Renders without crashing', () => {
      const dispatch = jest.fn();
      shallow(<LoginPage />);
      shallow(<LoginForm handleSubmit={dispatch} />);
    });

    it('Should log user in when Login is clicked', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(
        <LoginForm handleSubmit={dispatch} />
      );
      const instance = wrapper.instance();
      expect(wrapper.find('button').length).toEqual(1);
      wrapper.find('button').simulate('click');
      expect(dispatch).toHaveBeenCalled;
    });
});