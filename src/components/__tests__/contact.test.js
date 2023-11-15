import { render } from "@testing-library/react";
import Contact from "../Contact";

it("Should check that input element with the placeholder name is on the page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
