import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { assert } from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import MerchantListComponent from './components/merchantListComponent';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('App renders without crashing', () => {
      const wrapper = shallow(<App />);
      assert.equal(wrapper.length, 1);
  });

  it('<MerchantListComponent /> renders properly', () => {

    const merchantList = [{
      "id": "1",
      "firstname": "John",
      "lastname": "Snow",
      "avatarUrl": "https://placeimg.com/150/150/people",
      "email": "johnsnow_got@gmail.com",
      "phone": "9090909090",
      "hasPremium": true,
      "timestamp": 1520713176,
      "bids": []
    },
    {
      "firstname": "Tony",
      "lastname": "Stark",
      "email": "tony@gmail.com",
      "phone": "9090909090",
      "avatarUrl": "https://placeimg.com/150/150/people",
      "hasPremium": true,
      "bids": [],
      "timestamp": 1520765428,
      "id": "CwGmqtI"
    }];

    const wrapper = shallow(<MerchantListComponent merchantList={merchantList} deleteMerchant={()=> {}} />);
    const merchantListWrapper = wrapper.find('.merchantListComponent');
    assert.equal(merchantListWrapper.length, 1);
  });

});
