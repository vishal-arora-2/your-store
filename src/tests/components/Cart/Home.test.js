import { render,fireEvent} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Home from '../../../Pages/Home';
import store from "../../../store";

describe('Home Page testing',()=>{
    test('our category',()=>{
        const {getByText}= render(
            <Provider  store={store}>
                <Home/>
            </Provider>
        )
    expect(getByText('OUR CATEGORIES')).toBeTruthy();
    })

    test('find best products test',()=>{
        const { getByTestId}= render(
            <Provider  store={store}>
                <Home/>
            </Provider>
        )
    expect(getByTestId('find')).toBeTruthy();
    })

    
    test('check all category cards are present',()=>{
        const { getByTestId}= render(
            <Provider  store={store}>
                <Home/>
            </Provider>
        )
    expect(getByTestId('card1')).toBeTruthy();
    expect(getByTestId('card2')).toBeTruthy();
    expect(getByTestId('card3')).toBeTruthy();
    expect(getByTestId('card4')).toBeTruthy();
    })
})