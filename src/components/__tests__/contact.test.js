import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("Should check that h1 element is in the document", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

it("Should check that there are two input boxes in the document", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});

it("Should check that button element is in the document", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Should check that element with placeholder text is in the document", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Enter Your Name");

  expect(inputName).toBeInTheDocument();
});
