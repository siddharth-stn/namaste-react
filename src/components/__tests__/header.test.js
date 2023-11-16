import { render, screen } from "@testing-library/react";
import Header from "../Header.jsx";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with button having name as Login", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });

  expect(button).toBeInTheDocument();
});

it("Should load header component with an element named Login", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});
