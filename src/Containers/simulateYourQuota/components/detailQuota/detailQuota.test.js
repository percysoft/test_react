import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ItemDetail } from './index';

describe('Test Item Detail Component', () => {
  test('Render Item ', () => {
    let title = 'TEA'
    let amount= 10000
    const wrapper = shallow (<ItemDetail amount={amount} title={title}/>)
    expect(wrapper).toMatchSnapshot();
  })
})