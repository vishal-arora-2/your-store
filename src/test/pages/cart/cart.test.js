import { render } from "@testing-library/react";
import React from "react";
import Cart from "../../../Pages/Cart";
import { Provider } from 'react-redux';
import store from "../../../store";


describe("cart page", () => {
test("cart testing", () => {
    const {getByTestId}=render(
        <Provider store={store}>
            <Cart />
        </Provider>
    )
    expect(getByTestId("cartt")).toBeTruthy();
  });
})