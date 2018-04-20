import React from 'react';
import {shallow, mount} from 'enzyme';

import {LandingPage} from './landing-page';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
      shallow(<LandingPage />);
    });

    it('Renders login form', () => {
      const editor = shallow(<LandingPage />);
      expect(editor.find('div.home').length).toEqual(1);
    });
});