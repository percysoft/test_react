import React from 'react';
import '@testing-library/jest-dom';
import { RangeSliderComponent } from './index';
import { shallow } from 'enzyme';

describe('Test Range Slider Component Component', () => {
  test('Show value quotas', () => {
    let valueQuota= 10000
    const  wrapper = shallow (<RangeSliderComponent valueQuota={valueQuota} />)
    expect(wrapper).toMatchSnapshot();
  })
})