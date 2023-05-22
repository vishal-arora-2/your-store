import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import Footer from "../../../components/Footer/Footer";

describe("test of Footer component", () => {
  test("Cartit exists", () => {
    const { getByText } = render(
     
        <Footer />
     
    );
    expect(getByText("Cartit")).toBeTruthy();
  });
  test("Categories exists", () => {
    const { getByText } = render(
        <Footer />
    );
    expect(getByText("Categories")).toBeTruthy();
  });
  test("CONTACT exists", () => {
    const {getByText } = render(
        <Footer />
    );
    expect(getByText("Contact")).toBeTruthy();
  });
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
