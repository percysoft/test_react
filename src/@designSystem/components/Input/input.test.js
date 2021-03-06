import React from 'react';
import '@testing-library/jest-dom';
import { InputContainer } from './InputComponent';
import { render, shallow } from 'enzyme';
import { validator  } from './validators';

describe('Test Input Component', () => {
  test('show component', () => {
    const wrapper  = shallow (<InputContainer />)
    expect(wrapper).toMatchSnapshot();
  })

  test('Show mount only  min and max', () => {
    let min_amount = 1;
    let max_amount= 50;
    let message_test = `Mínimo S/${min_amount} - Máximo S/ ${max_amount}`;
    const wrapper  = shallow (<InputContainer min_amount={min_amount} max_amount={max_amount}/>);
    const wrapper_text = wrapper.find('div').text().trim();
    expect(wrapper_text).toBe(message_test);
  }) 
  
})

describe("Filter function", () => {
  test("validator function if no error", () => {
    let number = 1000;
    let min = 50;
    let max = 2000;
    let isError = validator(number, min, max)
    expect(false).toBe(isError)
  });
  test("validator function if  error", () => {
    let number = 20;
    let min = 50;
    let max = 2000;
    let isError = validator(number, min, max)
    expect(true).toBe(isError)
  });
});
