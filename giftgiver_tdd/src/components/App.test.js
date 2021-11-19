import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { toMatchDiffSnapshot } from 'snapshot-diff';

import App from './App';

expect.extend({ toMatchDiffSnapshot });

// default state
const setup = (state = {}) => {
  return shallow(<App />);
};

describe('rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      gifts: [],
    });
  });

  test('should render component correctly', () => {
    const component = toJson(wrapper);
    expect(component).toMatchSnapshot();

    const componentUpdate = toJson(wrapper);
    expect(componentUpdate).toMatchDiffSnapshot(component);
  });

  test('initializes the `state` with an empty list of gifts', () => {});
});
