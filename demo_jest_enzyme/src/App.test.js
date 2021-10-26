// Enzyme creates a virtual dom & it's rendering methods for Unit/Integration Testing
import Enzyme, { shallow } from 'enzyme';

// to help translate react code into Enzyme code
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

// configure enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders non-empty component without crashing', () => {
  // note - Shallow render only renders Parent component but not Child components
  // Shallow takes JSX & returns shallow wrapper component - output of shallow rendering
  const wrapper = shallow(<App />);

  // assertion with expect(subject) - global function
  // expect statement gives us access to a number of "matchers" that let us validate different things
  expect(wrapper.exists()).toBe(true);
  //.exists([selector]) => Boolean
  // Returns whether or not any nodes exist in the wrapper.
  // Or, if a selector is passed in, whether that selector has any matches in the wrapper

  // one of the many Shallow rendering methods.
  // Returns an HTML-like string of the wrapper for debugging purposes.
  // Useful to print out to the console when tests are not passing when you expect them to
  // console.log(wrapper.debug());
});
