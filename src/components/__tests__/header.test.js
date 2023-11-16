import { fireEvent, render, screen } from "@testing-library/react";
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

it("Should load header component Cart Link with 0 items", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const cartLink = screen.getByText("Cart - 0");

  expect(cartLink).toBeInTheDocument();
});

it("Should load header component Cart Link", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  // Using Regex
  const cartLink = screen.getByText(/Cart/);

  expect(cartLink).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
