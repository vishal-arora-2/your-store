import React from 'react';
import RightTotal from '../../../components/CartCard/RightTotal';
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from "../../../store";
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem')
  Object.setPrototypeOf(localStorage.setItem, jest.fn())

  jest.spyOn(Object.getPrototypeOf(localStorage), 'getItem')
  Object.setPrototypeOf(localStorage.getItem, jest.fn())

  test('calls localStorage.setItem when clicked', () => {
    const {getByTestId}= render(
        <Provider store={store}>
            <RightTotal/>
        </Provider>
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  })

//   test('call total Amount', () => {
//     const {getByTestId}= render(
//         <Provider store={store}>
//             <RightTotal/>
//         </Provider>
//     );
//     const btn = getByTestId('total1').textContent;
//     expect(localStorage.getItem('totalAmt')).toBe(btn)
//   })
})
