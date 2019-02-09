import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/FormControl';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';

/*it('renders children when passed in', () => {
  const wrapper = shallow((
    <Form />
  ));
  expect(wrapper.contains(<div className="inputForm" />)).to.equal(true);
}); */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
