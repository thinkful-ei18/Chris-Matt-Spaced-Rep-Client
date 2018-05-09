import React from 'react';
import {shallow, mount} from 'enzyme';

import {Instructions} from './instructions';

describe('<Instructions />', () => {
    it('Renders without crashing', () => {
      shallow(<Instructions />);
    });

    it('Renders login form', () => {
      const editor = shallow(<Instructions />);
      expect(editor.find('div.login-form').length).toEqual(1);
    });
});