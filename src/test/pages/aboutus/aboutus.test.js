import { render } from "@testing-library/react";
import React from "react";
import About from "../../../Pages/About";

describe("about page", () => {
  test("hero text testing", () => {
    const { getByText } = render(<About />);
    expect(getByText("About the team")).toBeTruthy();
  });

  test("know more button testing", () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId("knowmore")).toBeInTheDocument();
  });

  test("hero image testing", () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId("heropicture")).toBeInTheDocument();
  });

  test("card name testing", () => {
    const { getByText } = render(<About />);
    expect(getByText("Priyanshu Dabas")).toBeTruthy();
  });

  test("avatar image testing", () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId("avatarpic")).toBeInTheDocument();
  });

  test("card title testing", () => {
    const { getByText } = render(<About />);
    expect(getByText("Mentor")).toBeTruthy();
  });
});
