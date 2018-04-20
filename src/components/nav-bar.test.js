import React from 'react';
import {shallow, mount} from 'enzyme';

import {NavBar} from './nav-bar';
import { clearAuth } from '../actions/auth';

describe('<NavBar />', () => {
  const currentUser = {
    username: 'cyang'
  }
  it('Renders without crashing', () => {
    shallow(<NavBar />);
  });

  it('Dipatches clearAuth when logout is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <NavBar dispatch={dispatch} loggedIn="true" currentUser={currentUser}/>
    );
    const instance = wrapper.instance();
    expect(wrapper.find('.logout').length).toEqual(1);
    wrapper.find('.logout').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(clearAuth());
  });
});