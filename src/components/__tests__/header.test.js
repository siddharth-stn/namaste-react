import { render } from "@testing-library/react";
import Header from "../Header.jsx";
import { MemoryRouter } from "react-router-dom";

it("Should load header component with a login button", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});
