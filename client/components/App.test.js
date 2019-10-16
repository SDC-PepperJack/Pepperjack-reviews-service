import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App.jsx';
import ReviewList from './ReviewList.jsx';




describe('<App />', () => {

  test('It renders a review list', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).toEqual('<ReviewList />');
  });

});



describe('<ReviewList />', () => {

  test('It should render review list and its props ', () => {

    let comments = [{
      id: 1,
      // reviewerAvatar
      // reviewerComment
      reviewerDate: 'july 9 2012'
      // reviewerItem
      // reviewerName
      // reviewerItemPhoto
    }];

    const wrapper = shallow(<ReviewList reviews={200} comments={comments} />);


    expect(wrapper.find('.reviewsNumber').text()).toBe('Reviews ***** (200)');
    // expect(wrapper.find('#card').text()).toBe('july 9 2012');

  });



});
