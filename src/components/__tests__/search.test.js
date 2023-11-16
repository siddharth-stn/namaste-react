import { fireEvent, render, screen } from "@testing-library/react";
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

it("should render ", async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "hut" } });

  fireEvent.click(searchButton);

  const card = screen.getAllByTestId("resCard");

  expect(card.length).toBe(1);
});
