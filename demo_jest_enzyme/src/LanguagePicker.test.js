import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";

import LanguagePicker from "./LanguagePicker";

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = wrapper.find("[data-test='component-language-picker']");
  expect(component.exists()).toBe(true);
});

test("does not throw warning with expected props", () => {
  checkPropTypes(LanguagePicker.propTypes, { setLanguage: jest.fn() }, "prop", LanguagePicker.name);
});

test("renders non-zero language icons", () => {
  const wrapper = setup();
  const languageIcons = wrapper.find("[data-test='language-icon']");
  expect(languageIcons.length).toBeGreaterThan(0);
});

test("calls setLanguage prop upon click", () => {
  const wrapper = setup();
  const languageIcons = wrapper.find("[data-test='language-icon']");

  // first array element
  const firstIcon = languageIcons.first();
  firstIcon.simulate("click");

  expect(mockSetLanguage).toHaveBeenCalled();
});
