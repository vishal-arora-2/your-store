import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import Products from "../../../Pages/Products"
import { Provider } from "react-redux";
import store from "../../../store";



describe("test of Product Section Page" , () =>{
      test("Add to Cart Button", () => {
        const { getByText } = render(
          <Provider store={store}>
            <Products  />
          </Provider>
        );
        expect(getByText("Add to Cart")).toBeTruthy();
      });
      test("Add to Cart Button On Click", () => {
        const { getByTestId, getByText } = render(
          <Provider store={store}>
            <Products data={data} />
          </Provider>
        );
        fireEvent.click(getByText("Add to Cart"));
        const quantity = getByTestId("quant");
        expect(quantity.textContent).toBe("1");
      });
    test("Category exists", () => {
        const { getByText } = render(
            <Provider store={store}>

                <Products/>
            </Provider>
         
         
        );
        expect(getByText("Category:")).toBeTruthy();
    });
} )