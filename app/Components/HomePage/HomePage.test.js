import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";


Enzyme.configure({ adapter: new Adapter() });

test('HomePage component should render as expected', () => {
  const component = shallow(<HomePage />)
  expect(component.contains('You have successfully created your Overstock Professional account.')).toBe(true)
});
