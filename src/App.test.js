import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { assert } from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import MerchantListContainer from './containers/merchantListContainer';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('App renders without crashing', () => {
      const wrapper = shallow(<App />);
      assert.equal(wrapper.length, 1);
  });

});
