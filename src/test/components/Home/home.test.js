import React from 'react';
import { render} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../../../store";
import Home from '../../../Pages/Home';

describe('test cases of home component',()=>{

    test('Fill your Cart Now... exists',()=>{
         const {getByText} = render (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
        expect(getByText('Fill your Cart Now...')).toBeTruthy();
    })

    test('Electronic card exists',()=>{
        const {getByTestId} = render (
           <Provider store={store}>
              <Home/>
           </Provider>
       );
       expect(getByTestId('card1')).toBeTruthy();
   })

   test('Mens clothing card exists',()=>{
    const {getByTestId} = render (
       <Provider store={store}>
           <Home/>
       </Provider>
   );
   expect(getByTestId('card2')).toBeTruthy();
})

test('Women clothing card exists',()=>{
    const {getByTestId} = render (
       <Provider store={store}>
           <Home/>
       </Provider>
   );
   expect(getByTestId('card3')).toBeTruthy();
})

test('Jewelery card exists',()=>{
    const {getByTestId} = render (
       <Provider store={store}>
           <Home/>
       </Provider>
   );
   expect(getByTestId('card4')).toBeTruthy();
})

test('Buy Products Now at Just One Click! exists',()=>{
    const {getByText} = render (
       <Provider store={store}>
           <Home/>
       </Provider>
   );
   expect(getByText('Buy Products Now at Just One Click!')).toBeTruthy();
})


})