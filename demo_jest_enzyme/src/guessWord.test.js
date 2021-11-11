import React from 'react';
import App from './App';

// note - The difference between shallow() and mount() is that shallow()
// method tests components in isolation from the child components they render
// while mount() goes deeper and tests a component's children.

// mount - is for functional testing
// mount method renders the full DOM including Parent Component & its Child Components
import { mount } from 'enzyme';

// note - this is a functional testing with mount for App component & it's children
// creating a wrapper that submits a guess word of 'train' by default
const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // note - user flow testing
  // add value to input box
  const inputBox = wrapper.find("[data-test='input-box']");
  // mock event as argument
  inputBox.simulate('change', { target: { value: 'train' } });

  // simulate click on submit button
  const submitButton = wrapper.find("[data-test='submit-button']");
  // to avoid errors related to preventDefault()
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
};

describe.skip('no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    // passing default state as in our App component
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  // since we already passed guess word 'train' in setup func
  test('creates GuessedWords table with one row', () => {
    const guessedWordsRows = wrapper.find("[data-test='guessed-word']");
    expect(guessedWordsRows).toHaveLength(1);
  });
});

describe.skip('some words guessed', () => {
  let wrapper;

  beforeEach(() => {
    // passing default state as in our App component
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessWord: 'agile', letterMatchCount: 1 }],
    });
  });

  test('adds row to guessedWords table', () => {
    const guessedWordNodes = wrapper.find("[data-test='guessed-word']");
    expect(guessedWordNodes).toHaveLength(2);
  });
});

describe('invalid word guessed', () => {
  // 'todo' is to write a test in the future
  // note -require description only
  test.todo('guessedWords table does not get another row');
});
