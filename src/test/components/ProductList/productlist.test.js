import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import ProductList from "../../../Pages/ProductList";

describe("test of Product List Page", () => {
  test("Product exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    expect(getByText("HELLO")).toBeTruthy();
  });
});
