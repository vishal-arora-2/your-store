import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import Myrouter from "../../../Pages/Myrouter";

describe("test of MyRouter Page", () => {
  test("Router exists", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Myrouter />
      </Provider>
    );
    expect(getByTestId("router")).toBeTruthy();
  });
});
