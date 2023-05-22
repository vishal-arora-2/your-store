import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import Products from "../../../Pages/Products"
import { Provider } from "react-redux";
import store from "../../../store";



describe("test of Product Section Page" , () =>{
    test("Category exists", () => {
        const { getByText } = render(
            <Provider store={store}>

                <Products/>
            </Provider>
         
         
        );
        expect(getByText("Category:")).toBeTruthy();
    });
} )