import { shallow } from 'enzyme';
import App from './App';

const setup = () => {
  return shallow(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent).toHaveLength(1);
});
