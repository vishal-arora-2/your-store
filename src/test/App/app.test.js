import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import App from "../../App";

describe("test of Filter Section Page", () => {
  test("Categories exists", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("app")).toBeTruthy();
  });
});