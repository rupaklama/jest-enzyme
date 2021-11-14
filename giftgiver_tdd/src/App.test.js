import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { toMatchDiffSnapshot } from 'snapshot-diff';

import App from './App';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

expect.extend({ toMatchDiffSnapshot });

// 1) The output of snapshot tests becomes most often too large, if the actual snapshot test renders a component with lots of child components. This holds two problems in itself: A) You cannot diff your snapshot outputs with confidence anymore by just looking at them and B) you end up with kinda duplicated snapshot outputs, if you snapshot test your child components as well.

// 2) If your actual snapshot tested component renders lots of child components, all props for the child components need to be set up in the snapshot test of your parent component. Thus, you are not really focusing on the parent component, but on setting up all the necessary information for the child component. This task becomes repetitive if you test your child components in separation again, because there you have to test them with the same props setup. Eventually you end up with duplicated test setups.

// As you can see, these two problems only apply for parent components which render more than a few child components. So what if you could shallow render the parent component in your snapshot test to focus only on the parent component in your test; and on whether it renders instances of its child components without worrying about the whole output of the child component?

// Mocking child components so that Not to render the real child components
// Child components should have their own Snapshot tests
jest.mock('./ChildOne', () => () => 'ChildOne');
jest.mock('./ChildTwo', () => () => 'ChildTwo');

describe('rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('should render App component correctly', () => {
    // toJson is for Clean and readable output
    // Remember to always check the output of your snapshots, they need to be easy to read and understand
    const component = toJson(wrapper);
    expect(component).toMatchSnapshot();

    // Snapshot tests are a common way to write lightweight component tests. When a snapshot test runs for the first time, it stores its output (e.g. rendered component's HTML structure) in a snapshot output file. Every time the snapshot test runs again, another snapshot output file gets created; which is used to diff the output against the old snapshot test's output file

    // 1) The entire component gets snap shotted again. (Redundancy)
    // 2) It's not clear that the snapshot was performed to assert a change regarding a re-rendered component.
    // Rather it's just a straightforward snapshot again. (Missing Context)
    const componentUpdate = toJson(wrapper);
    // note - toMatchDiffSnapshot solve above mentioned issues & avoids creating another snapshot output file
    expect(componentUpdate).toMatchDiffSnapshot(component);
  });

  test('should render Child components with correct props', () => {
    const childOne = wrapper.find(ChildOne);
    expect(childOne.props()).toEqual({
      text: 'Child One',
    });

    const childTwo = wrapper.find(ChildTwo);
    expect(childTwo.props()).toEqual({
      text: 'Child Two',
    });
  });
});
