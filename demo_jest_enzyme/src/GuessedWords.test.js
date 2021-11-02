import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('results no error with expected props', () => {
  const propError = checkPropTypes(GuessedWords.propTypes, defaultProps, 'prop', GuessedWords.name);
  expect(propError).toBeUndefined();
});

// describe is just for grouping related tests together
describe('if there are no words guessed', () => {
  // creating global scope inside describe
  let wrapper;

  // beforeEach method runs before each tests
  // code that we want to execute before each tests
  beforeEach(() => {
    // overriding prop by passing custom prop
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    // overriding prop by passing custom prop
    // wrapper = setup({ guessedWords: [] });

    const component = wrapper.find("[data-test='component-guessed-words']");
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = wrapper.find("[data-test='guess-instructions']");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {});
