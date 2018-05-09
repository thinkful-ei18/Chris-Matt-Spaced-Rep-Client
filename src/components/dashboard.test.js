import React from 'react';
import {shallow, mount} from 'enzyme';

import {Dashboard} from './dashboard';

describe('<Dashboard />', () => {
  const questions = [];
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Dashboard dispatch={dispatch} questions={questions} />);
  });
});