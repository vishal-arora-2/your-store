import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import CartReview from "../../Pages/CartReview";
import store from "../../store";

describe("CartReview test", () => {
    test("left card test", () => {
        const { getByText } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByText("Checkout")).toBeTruthy();
      });
    test("cart item present", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("cartitems")).toBeTruthy();
      });
      test("cart item present", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("title1")).toBeTruthy();
      });
      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("ip1")).toBeTruthy();
      });
      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("ip2")).toBeTruthy();
      });
      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("ip3")).toBeTruthy();
      });

      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("ip4")).toBeTruthy();
      });

      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("ip5")).toBeTruthy();
      });

      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("ip6")).toBeTruthy();
      });
      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("ip7")).toBeTruthy();
      });

     test("cart input field", () => {
        const { getByTestId } = render(
        <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("f1")).toBeTruthy();
      });
      test("cart input field", () => {
        const { getByTestId } = render(
            <Provider store={store}>
        <CartReview />
        </Provider>
        );
        expect(getByTestId("f2")).toBeTruthy();
      });

});



    
    