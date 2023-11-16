import { render } from "@testing-library/react";
import Header from "../Header.jsx";

it("Should load header component with a login button", () => {
  render(<Header />);
});
