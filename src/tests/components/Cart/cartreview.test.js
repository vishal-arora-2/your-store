import { render,screen,fireEvent} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import CartReview from '../../../Pages/CartReview';
import store from "../../../store";
import 'jest-localstorage-mock';

describe('products listing page',()=>{
    test('checkout text testing',()=>{
        const {getByText}= render(
            <Provider store={store}>
                <CartReview />
            </Provider>
        )
    expect(getByText('Checkout')).toBeTruthy();
    })

    
    test('Cart text testing',()=>{
        const {getByText}= render(
            <Provider store={store}>
                <CartReview />
            </Provider>
        )
    expect(getByText('Your cart')).toBeTruthy();
    })


    test('Total item testing',()=>{
        // localStorage.getItem.mockReturnValueOnce('totalAmt');
        const {getByTestId}= render(
            <Provider store={store}>
                <CartReview />
            </Provider>
        )
    expect(getByTestId('totalitem')).toBeInTheDocument();
    expect(getByTestId('totalamount')).toBeInTheDocument();
    })
})