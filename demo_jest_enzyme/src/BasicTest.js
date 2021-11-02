// Enzyme creates a virtual dom & provides rendering methods for Unit/Integration Testing
import Enzyme, { shallow } from 'enzyme';

import Basic from './Basic';

// to help translate react code into Enzyme code
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// configure enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

// to keep code DRY
// custom factory function to create a ShallowWrapper for the App component
const setup = () => shallow(<Basic />);

test('renders non-empty component without error', () => {
  // note - Shallow only renders Parent component but not the Child components
  // Shallow takes JSX & returns shallow wrapper component - output of shallow rendering
  // const wrapper = shallow(<App />);
  const wrapper = setup();

  //.find(selector) => ShallowWrapper
  // find() - to find every node in the render tree of the current wrapper that matches the provided Selector.
  // Using attribute syntax ([attribute="value"] as a Test Selector.
  // note - Matches elements with an attr attribute whose value is exactly value — the string inside the quotes.
  const appComponent = wrapper.find("[data-test='component-app']"); // attrib name/value
  expect(appComponent.length).toBe(1);

  // assertion with expect(subject) - global function
  // expect statement gives us access to a number of "matchers" that let us validate different things
  expect(wrapper.exists()).toBe(true);
  //.exists([selector]) => Boolean
  // Returns whether or not any nodes exist in the wrapper.
  // Or, if a selector is passed in, whether that selector has any matches in the wrapper

  // .exists() is one of many Shallow rendering methods.
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/exists.html

  // console.log(wrapper.debug());
  // Returns an HTML-like string of the wrapper for debugging purposes.
  // Useful to print out to the console when tests are not passing when you expect them to
});

test('renders button', () => {
  const wrapper = setup();
  const button = wrapper.find("[data-test='increment-button']");

  // saying that there should be only One Element with that particular class name
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = setup();
  // storing a text from an element instead of an element itself
  const count = wrapper.find("[data-test='count']").text();
  // note - text() always returns a String of the current element, so need to compare against the String
  expect(count).toBe('0');
});

// here we test functionality
test('clicking button increments counter', () => {
  const wrapper = setup();

  // find the button
  const button = wrapper.find("[data-test='increment-button']");

  // click the button
  // Using .simulate(event[, ...args]) Simulate events on the root node in the wrapper. It must be a single-node wrapper
  // 1. event (String): The event name to be simulated
  // 2. ...args (Any [optional]): A mock event object that will get passed through to the event handlers.
  // note - Simulate ShallowWrapper: Returns itself
  button.simulate('click');

  // find the display & test number has been incremented
  const count = wrapper.find("[data-test='count']").text();
  expect(count).toBe('1');
});

test('decrements counter on button click', () => {
  const wrapper = shallow(<Basic />);
  const button = wrapper.find("[data-test='decrement-button']");
  button.simulate('click');
  const count = wrapper.find("[data-test='count']").text();
  expect(count).toBe('-1');
});
