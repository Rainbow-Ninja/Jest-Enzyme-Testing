import React from 'react';
import ReactDOM from 'react-dom';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
configure({ adapter: new Adapter() });
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
const setup = (props={}, state=null) => {
   const wrapper = shallow(<App {...props} />)
   if(state) wrapper.setState(state)
   return wrapper
}

const findByAttribute = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

// renders without crashing and target a specific dom element
test("renders without crashing", () => {
  const wrapper = setup();
  // target a specific element
  const appComponent = findByAttribute(wrapper, 'component-app');
  // make an assertion
  expect(appComponent.length).toBe(1)
})

test("renders increment button", () =>{
  const wrapper = shallow(<App />);
  // target a specific element
  const button = findByAttribute(wrapper, 'button');
  // make an assertion
  expect(button.length).toBe(1)
})

test("renders counter display", () => {
  const wrapper = setup()
  // target a specific element
  const counterDisplay = findByAttribute(wrapper, 'counter-display');
  // make an assertion
  expect(counterDisplay.length).toBe(1)
})

test("test counter starts at 0", () => {
  const wrapper = setup()
  const initialCounterVal = wrapper.state('counter')
  expect(initialCounterVal).toBe(0)
})

test("test counter increments on button click", () => {
  // set initial value to be something eg 5
  let counter = 5
  const wrapper = setup({}, {counter})
  // simulate a button click 
  const button = findByAttribute(wrapper, 'button')
  button.simulate('click')
  // Read the value of the counter display to ensure it has gone up by 1 
  const counterDisplay = findByAttribute(wrapper, 'counter-display')
  console.log(counterDisplay.debug())
  expect(counterDisplay.text()).toContain(counter+1)
})