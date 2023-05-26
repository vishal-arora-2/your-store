import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import Payment from "../../../Pages/Payment";
import { Provider } from "react-redux";
import store from "../../../store";

describe("test of Payment Pages", () => {
  test("Payement options exists", () => {
    const { getByText } = render(
     <Provider  store={store}>
         <Payment/>
     </Provider>
     
    );
    expect(getByText("Payment Options")).toBeTruthy();
  });
  test("Summary exists", () => {
    const { getByText } = render(
        <Provider  store={store}>
        <Payment/>
    </Provider>
    );
    expect(getByText("Summary")).toBeTruthy();
  });
  test("Subtotal exists", () => {
    const {getByText } = render(
        <Provider  store={store}>
        <Payment/>
    </Provider>
    );
    expect(getByText("Subtotal")).toBeTruthy();
  });
  test("Shipping exists", () => {
    const {getByText } = render(
        <Provider  store={store}>
        <Payment/>
        </Provider>
    );
    expect(getByText("Shipping")).toBeTruthy();
  });
  test("Total amount exists", () => {
    const {getByText } = render(
        <Provider  store={store}>
          <Payment/>
        </Provider>
    );
    expect(getByText("Total amount")).toBeTruthy();
  });
//   test("confirm button exits", () => {
//     const { getByTestId } = render(
//       <Provider store={store}>
//         <Payment/>
//       </Provider>
//     );
//     expect(getByTestId("confirm")).toBeInTheDocument();
//   });
  });

//   test("Women's Clothing exists", () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <FilterSection />
//       </Provider>
//     );
//     expect(getByText("Women's Clothing")).toBeTruthy();
//   });
//   test("Jewelery exists", () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <FilterSection />
//       </Provider>
//     );
//     expect(getByText("Jewelery")).toBeTruthy();
//   });
//   test("Electronics exists", () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <FilterSection />
//       </Provider>
//     );
//     expect(getByText("Electronics")).toBeTruthy();
//   });

// describe("testing button", () => {
//   test("Button Click", () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <FilterSection />
//       </Provider>
//     );
//     expect(getByText("Clear Filters")).toBeTruthy();
//     fireEvent.click(getByText("Clear Filters"));
//     expect(getByText(""));
//   });
// });
