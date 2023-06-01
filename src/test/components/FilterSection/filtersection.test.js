import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import FilterSection from "../../../components/FilterSection";

describe("test of Filter Section Page", () => {
  test("Categories exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterSection />
      </Provider>
    );
    expect(getByText("Categories")).toBeTruthy();
  });
  test("ALL exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterSection />
      </Provider>
    );
    expect(getByText("All")).toBeTruthy();
  });
  test("Men's Clothing exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterSection />
      </Provider>
    );
    expect(getByText("Men's Clothing")).toBeTruthy();
  });
  test("Women's Clothing exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterSection />
      </Provider>
    );
    expect(getByText("Women's Clothing")).toBeTruthy();
  });
  test("Jewelery exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterSection />
      </Provider>
    );
    expect(getByText("Jewelery")).toBeTruthy();
  });
  test("Electronics exists", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterSection />
      </Provider>
    );
    expect(getByText("Electronics")).toBeTruthy();
  });
});

describe("testing button", () => {
  test("Button Click Clear Filter", () => {
    const setFilter = jest.fn();
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <FilterSection setFilter={setFilter} />
      </Provider>
    );
    expect(getByText("Clear Filters")).toBeTruthy();
    fireEvent.click(getByText("Clear Filters"));
    const price = getByTestId("id");
    expect(price.textContent).toBe("$0");
  });
  test("test setFilter button ALL", () => {
    const setFilter = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <FilterSection setFilter={setFilter} />
      </Provider>
    );
    expect(getByTestId("ALL")).toBeTruthy();
    fireEvent.click(getByTestId("ALL"));
    expect(setFilter).toHaveBeenCalled();
  });
  test("test setFilter button Men's Clothing", () => {
    const filterProduct = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <FilterSection filterProduct={filterProduct} />
      </Provider>
    );
    expect(getByTestId("men")).toBeTruthy();
    fireEvent.click(getByTestId("men"));
    expect(filterProduct).toHaveBeenCalled();
  });
  test("test setFilter button Women's Clothing", () => {
    const filterProduct = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <FilterSection filterProduct={filterProduct} />
      </Provider>
    );
    expect(getByTestId("women")).toBeTruthy();
    fireEvent.click(getByTestId("women"));
    expect(filterProduct).toHaveBeenCalled();
  });
  test("test filterProduct button Jewelery", () => {
    const filterProduct = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <FilterSection filterProduct={filterProduct} />
      </Provider>
    );
    expect(getByTestId("jewelery")).toBeTruthy();
    fireEvent.click(getByTestId("jewelery"));
    expect(filterProduct).toHaveBeenCalled();
  });
  test("test filterProduct button Electronics", () => {
    const filterProduct = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <FilterSection filterProduct={filterProduct} />
      </Provider>
    );
    expect(getByTestId("electronics")).toBeTruthy();
    fireEvent.click(getByTestId("electronics"));
    expect(filterProduct).toHaveBeenCalled();
  });
});
