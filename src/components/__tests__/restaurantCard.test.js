import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import mockData from "../../../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render ResCard component with props Data", () => {
  render(<ResCard resData={mockData} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});

it("Should render ResCard component with promoted Label");
