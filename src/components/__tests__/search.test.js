import { render, screen } from "@testing-library/react";
import Main from "../Main";
import { act } from "react-dom/test-utils";
import MockData from "../../../__mocks__/mockResListData.json";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

it("should render the Main component with search button", async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });

  const searchButton = screen.getByRole("button", { name: "Search" });

  expect(searchButton).toBeInTheDocument();
});
