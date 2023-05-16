import { fireEvent, queryByText, render, screen } from "@testing-library/react";
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
  test("Button Click", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <FilterSection />
      </Provider>
    );
    expect(getByText("Clear Filters")).toBeTruthy();
    fireEvent.click(getByText("Clear Filters"));
    const price = getByTestId("id");
    expect(price.textContent).toBe("$0");
  });
});
