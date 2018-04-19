import React from 'react';
import {shallow, mount} from 'enzyme';

import {App} from './app';
import {LandingPage} from './landing-page';

describe('<App />', () => {
    it('Renders without crashing', () => {
      shallow(<App />);
      shallow(<LandingPage />)
    });
});