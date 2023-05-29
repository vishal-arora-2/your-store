import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import Products from "../../../Pages/Products";
import { Provider } from "react-redux";
import store from "../../../store";

describe("test of Product Section Page", () => {
  test("Add to Cart Button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(getByTestId("addtocartbtn")).toBeInTheDocument();
  });
  test("Add to Cart Button On Click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    fireEvent.click(getByTestId("addtocartbtn"));
    const quantity = getByTestId("quant");
    expect(quantity.textContent).toBe("1");
  });
  test("Category exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(getByText("Category:")).toBeTruthy();
  });
});
