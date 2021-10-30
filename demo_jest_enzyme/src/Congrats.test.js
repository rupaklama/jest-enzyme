import Enzyme, { shallow } from 'enzyme';
import EnzymeApapter from '@wojtekmaj/enzyme-adapter-react-17';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeApapter() });

// Since Congrats component takes props - default prop is set to empty object
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test('renders without an error', () => {
  const wrapper = setup();
  // expect(wrapper.exists()).toBe(true);
  const component = wrapper.find("[data-test='component-congrats']");
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {});

test('renders congrats message when `success` prop is true', () => {});
