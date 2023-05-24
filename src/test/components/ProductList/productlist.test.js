import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import ProductList from "../../../Pages/ProductList";
import Card from "../../../components/Card";

describe("test of Product List Page", () => {
  //   test("Product exists", () => {
  //     const { getByText } = render(
  //       <Provider store={store}>
  //         <ProductList />
  //       </Provider>
  //     );
  //     expect(getByText("HELLO")).toBeTruthy();
  //   });

  test("should render Card component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    expect(getByTestId("cardId")).toBeTruthy();
  });
  test("should render Filter Section component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    expect(getByTestId("filterSectionId")).toBeTruthy();
  });
  //   test("testing getproducts function", () => {
  //     const getProducts = jest.fn();
  //     const { getByTestId } = render(
  //       <Provider store={store}>
  //         <ProductList />
  //       </Provider>
  //     );
  //     expect(getProducts).toHaveBeenCalled();
  //   });
});
