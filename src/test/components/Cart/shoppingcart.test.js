import { render,fireEvent} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import ShoppingCart from '../../../components/CartCard/ShoppingCart'
import store from "../../../store";
// import 'jest-localstorage-mock';

const data = {"id":1,"quantity":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
describe('test cases of add to cart page',()=>{

test('cart is present',()=>{
    const {getByTestId}=render(
        <Provider store={store}>
            <ShoppingCart />
        </Provider>
    )
    expect(getByTestId('cart')).toBeTruthy();

})

test('explore product is present',()=>{
    const {getByTestId}=render(
        <Provider store={store}>
            <ShoppingCart />
        </Provider>
    )
    expect(getByTestId('explore')).toBeTruthy();

})

test('anchor tag is present',()=>{
    const {getByRole}=render(
        <Provider store={store}>
            <ShoppingCart />
        </Provider>
    )
    expect(getByRole('link')).toHaveAttribute('href', '/productlist');

})
})