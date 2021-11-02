import { shallow } from 'enzyme';

import checkPropTypes from 'check-prop-types';

import Congrats from './Congrats';

// default props in our component
const defaultProps = { success: false };

const setup = (props = {}) => {
  // passing default props first & to pass additional custom props optionally into our Shallow Component
  // note - the props order matters here
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('renders without an error', () => {
  const wrapper = setup();
  // expect(wrapper.exists()).toBe(true);
  const component = wrapper.find("[data-test='component-congrats']");
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  // passing props
  const wrapper = setup();
  const component = wrapper.find("[data-test='component-congrats']");
  // text() always returns a String of the current element
  expect(component.text()).toBe('');
});

test('renders congrats message when `success` prop is true', () => {
  // note - passing custom props here by overriding default props
  const wrapper = setup({ success: true });
  const message = wrapper.find("[data-test='congrats-message']");
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: true };

  // first arg is the 'PropTypes' object
  // second arg is the props we want to test - expectedProps
  // third arg is to tell we are testing properties - 'prop'
  // fourth arg is the name of the Component - .name
  const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
  // note - Sine we are using 'checkPropTypes' package,
  // we will now get an Errors returned to us rather than throwing as a Warning in the Console.

  // note - the error will be undefined if the props passed all the test
  expect(propError).toBeUndefined();
});
