import React from "react";
import { shallow } from "enzyme";
import { toMatchDiffSnapshot } from "snapshot-diff";

import App from "./App";

expect.extend({ toMatchDiffSnapshot });

// default state
const setup = (state = {}) => {
  return shallow(<App />);
};

describe("app", () => {
  let appComponent;

  beforeEach(() => {
    appComponent = setup();
  });

  test("renders correctly", () => {
    expect(appComponent).toMatchSnapshot();
  });

  test("initializes the `state` with an empty list of gifts", () => {
    expect(appComponent.state().gifts).toEqual([]);
  });

  // BDD manner test approach
  describe("when clicking the `add-gift` button", () => {
    beforeEach(() => {
      appComponent.find(".btn-add").simulate("click");
    });

    test("adds a new gift to `state`", () => {
      expect(appComponent.state().gifts).toEqual([{ id: 1 }]);
    });

    test("adds a new gift to rendered list", () => {
      expect(appComponent.find(".gift-list").children().length).toBe(1);
    });
  });
});
