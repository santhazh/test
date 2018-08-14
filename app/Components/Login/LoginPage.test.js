import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from './LoginPage'
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";


Enzyme.configure({ adapter: new Adapter() });

test('LoginPage component should render as expected', () => {
  const component = shallow(<LoginPage />)
  expect(component.contains(' Discover the one-stop shop that works for you. ')).toBe(true)
});
