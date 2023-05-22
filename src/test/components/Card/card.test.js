import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { Provider } from "react-redux";
import Card from "../../../components/Card";
import store from "../../../store";

describe("Testing Card Component", () => {
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
  ];
  test("Add to Cart Button", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Card data={data} />
      </Provider>
    );
    expect(getByText("Add to Cart")).toBeTruthy();
  });
  test("Add to Cart Button On Click", () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Card data={data} />
      </Provider>
    );
    fireEvent.click(getByText("Add to Cart"));
    const quantity = getByTestId("quant");
    expect(quantity.textContent).toBe("1");
  });
  test("Button click PlusHandeler ", () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Card data={data} />
      </Provider>
    );
    fireEvent.click(getByText("Add to Cart"));
    fireEvent.click(getByTestId("plus"));
    const quantity = getByTestId("quant");
    expect(quantity.textContent).toBe("2");
  });
  // test("Button click minusHandeler ", () => {
  //   const { getByTestId, getByText } = render(
  //     <Provider store={store}>
  //       <Card data={data} />
  //     </Provider>
  //   );
  //   fireEvent.click(getByText("Add to Cart"));
  //   fireEvent.click(getByTestId("minus"));
  //   const quantity = getByTestId("altquant");
  //   expect(quantity.textContent).toBe("0");
  // });
});
