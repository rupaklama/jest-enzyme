import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Input from './Input';

const defaultProps = { secretWord: 'party' };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe('render', () => {
  describe('success is true', () => {
    test('results no error with expected props', () => {
      const propError = checkPropTypes(Input.propTypes, defaultProps, 'prop', Input.name);
      expect(propError).toBeUndefined();
    });
  });

  describe('success is false', () => {});
});

describe('input component initial render', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const inputComponent = wrapper.find("[data-test='component-input']");
    expect(inputComponent.length).toBe(1);
  });
});

describe('input field value in component state', () => {
  let mockSetCurrentGuess;
  let wrapper;

  beforeEach(() => {
    // mock setter func in useState
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    // shallow wrapper component
    wrapper = setup();
  });

  test('state updates with value of input box upon change', () => {
    // mocking setter func 'setCurrentGuess' in useState
    // now when executing our component, jest will run this mock func instead of actual Setter Func
    const mockSetCurrentGuess = jest.fn();
    // note - this mock func is what we are going to watch

    // running alternate code here by providing another mock function that returns a value
    // const [currentGuess, setCurrentGuess] = React.useState('');
    // [currentGuess, setCurrentGuess] = ['', mockSetCurrentGuess]
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    // now the test won't run actual useState in our component instead above mock function
    // run this useState with our mock function

    const wrapper = setup();
    const inputBox = wrapper.find("[data-test='input-box']");

    // mocking change event
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    // mock setter func call with this value
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('input field is clear upon clicking submit button', () => {
    // spy mock function for setCurrentGuess to see whether it ran
    // so that we can pass value in the state
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    // const wrapper = setup();
    const submitButton = wrapper.find("[data-test='submit-button']");
    submitButton.simulate('click');

    // setter func call with ''
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
