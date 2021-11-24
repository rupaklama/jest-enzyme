import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  let gift;

  beforeEach(() => {
    gift = shallow(<Gift />);
  });

  it("renders correctly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: " ", present: " " });
  });

  describe("when typing into the person input", () => {
    beforeEach(() => {
      gift.find(".input-person").simulate("change", { target: { value: "Uncle" } });
    });

    it("updates the person in `state`", () => {
      expect(gift.state().person).toEqual("Uncle");
    });
  });
});
