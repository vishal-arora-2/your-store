import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import CartReview from "../../../Pages/CartReview";
import CartReviewCard from "../../../components/CartReviewCard/CartReviewCard";
import store from "../../../store";
const data = {"id":1,"quantity":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
describe("cartreview page", () => {
  test("checkout text testing", () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartReview />
      </Provider>
    );
    expect(getByText("Checkout")).toBeTruthy();
  });

  test("Cart text testing", () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartReview />
      </Provider>
    );
    expect(getByText("Your cart")).toBeTruthy();
  });

  test("Total item testing", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CartReview />
      </Provider>
    );
    expect(getByTestId("totalitem")).toBeInTheDocument();
    expect(getByTestId("totalamount")).toBeInTheDocument();
  });

  
  test("Cart review card testing", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CartReviewCard item={data}/>
      </Provider>
    );
    expect(getByTestId("cartreviewcard")).toBeTruthy();
  });
});
