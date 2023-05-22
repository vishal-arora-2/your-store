import { render,fireEvent, getByTestId} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import LeftCartCard from "../../../components/CartCard/LeftCartCard";
import RightTotal from "../../../components/CartCard/RightTotal";
import store from "../../../store";
// import 'jest-localstorage-mock';

const data = {"id":1,"quantity":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}

describe('test cases of add to cart page',()=>{


    test('summary exists',()=>{
         const {getByText} = render (
            <Provider store={store}>
                <RightTotal/>
            </Provider>
        );
        expect(getByText('Summary')).toBeTruthy();
    })

    test('Subtotal exists',()=>{
        const {getByText}=render(
           <Provider store={store}>
               <RightTotal/>
           </Provider>
       );
       expect(getByText('Subtotal')).toBeTruthy();
   })

   test('shipping exists',()=>{
    const {getByText}=render(
       <Provider store={store}>
           <RightTotal/>
       </Provider>
   );
   expect(getByText('Shipping')).toBeTruthy();
})


test('shipping exists',()=>{
    const {getByTestId}=render(
       <Provider store={store}>
           <RightTotal/>
       </Provider>
   );
   expect(getByTestId('totalamountincgst')).toBeTruthy();
})

   test('Remove all from cart button exists and working',()=>{
    const removeallfromcart = jest.fn();
    const {getByTestId}=render(
       <Provider store={store}>
           <RightTotal  removeallfromcart={removeallfromcart}/>
       </Provider>
   );
   const btn = getByTestId('clearcart');
   expect(btn).toBeTruthy();
  fireEvent.click(btn);
  expect(removeallfromcart).toHaveBeenCalled();
})


   test('redeem button',()=>{
    const {getByTestId} = render(
        <Provider store={store}>
        <RightTotal/>
         </Provider>
    );
    const btn = getByTestId('redeem')
    // const coupon = getByTestId('coupon')
    expect(btn).toBeTruthy();
    // expect(coupon).toBeCalled();
   })







   test('increment by 1 is working',()=>{
    const {getByTestId}=render(
        <Provider store={store}>
            <LeftCartCard b={data}/>
        </Provider>
    )
    expect(getByTestId('plus')).toBeTruthy();
    const a = data.quantity;
    const valueElement = getByTestId('plus');   
    fireEvent.click(valueElement);
    const valueElement1 = getByTestId('res')
    expect(parseInt(valueElement1.textContent)).toBe(a);
   })


test('minus Handler button exist and working',()=>{
    const data2 = jest.fn()
    const {getByTestId} = render(
        <Provider store={store}>
        <LeftCartCard b={data} data2={data2}/>
    </Provider>
    )
    const btn = getByTestId('minus');
    expect(btn).toBeTruthy();
    fireEvent.click(btn)
    expect(data2).toHaveBeenCalled();
   })


   test('remove single button exist and working',()=>{
    const data3 = jest.fn()
    const {getByTestId} = render(
        <Provider store={store}>
        <LeftCartCard b={data} data3={data3}/>
    </Provider>
    )
    const btn = getByTestId('remove-item');
    expect(btn).toBeTruthy();
    fireEvent.click(btn)
    expect(data3).toHaveBeenCalled();
   })


   test('move to cart review page',()=>{
    const {getByRole}=render(
       <Provider store={store}>
           <RightTotal/>
       </Provider>
   );
   expect(getByRole('link')).toHaveAttribute('href', '/cartreview');
})
});

