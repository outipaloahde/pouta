import React from 'react';
import Weather from '../components/Weather';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Weather />);
});




