import { render } from "@testing-library/react";
import React from "react";
import Contact from "../../Pages/Contact";

describe("contact page", () => {
test("left card title testing", () => {
    const { queryByText } = render(<Contact />);
    expect(queryByText("Let's get in touch")).toBeTruthy();
  });

  test("submit button testing", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("submitbutton")).toBeInTheDocument();
  });

  test("right card title testing", () => {
    const { getByText } = render(<Contact />);
    expect(getByText("We're open for any suggestion or just to have a chat...")).toBeTruthy();
  });

  test("input field testing", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("inputfield1")).toBeInTheDocument();
  });

  test("input field testing", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("inputfield2")).toBeInTheDocument();
  });

  test("input field testing", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("inputfield3")).toBeInTheDocument();
  });

  test("input field testing", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("inputfield4")).toBeInTheDocument();
  });


});

