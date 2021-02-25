import { act, render, screen, waitFor } from "@testing-library/react";
import { getNewsByGuid as mockGetNewsByGuid } from "api/news";
import { NewsPage } from "components/NewsPage";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { formatDate } from "utils/date";
import strings from "~/strings";

jest.mock("api/news");

const newsGuid = "a7495b71-2e85-400e-44e1-e161bce4a1bd";

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = (guid: string) =>
  render(
    <MemoryRouter initialEntries={[`/news/${guid}`]}>
      <Route path="/news/:id">
        <NewsPage />
      </Route>
    </MemoryRouter>
  );

describe("NewsPage", () => {
  afterEach(() => {
    (mockGetNewsByGuid as jest.Mock).mockClear();
  });

  it("should access api", async () => {
    (mockGetNewsByGuid as jest.Mock).mockResolvedValue({
      success: true,
      data: {},
    });

    await act(async () => {
      renderComponent(newsGuid);

      await waitFor(() => {
        expect(mockGetNewsByGuid).toHaveBeenCalledTimes(1);
      });
      expect(mockGetNewsByGuid).toHaveBeenCalledWith(newsGuid);
    });
  });

  it("should render warning message when request fails", async () => {
    const mockedResponse = {
      success: false,
      data: {},
    };

    (mockGetNewsByGuid as jest.Mock).mockResolvedValue(mockedResponse);

    await act(async () => {
      const { findByText } = renderComponent(newsGuid);

      await findByText(strings.NewsNotFound);
    });
  });

  it("should display loader while fetching", () => {});

  it("should render fetched news", async () => {
    const mockedResponse = {
      success: true,
      data: {
        newsGuid: "1111111111",
        title: "Example news title",
        annotation: "Annotation missing",
        text: "Have a nice day, my friend! :)",
        createDate: new Date("01 Jan 2020 00:00:00 GMT"),
        changeDate: new Date("01 Jan 2021 00:00:00 GMT"),
      },
    };

    (mockGetNewsByGuid as jest.Mock).mockResolvedValue(mockedResponse);

    await act(async () => {
      renderComponent(newsGuid);

      expect(await screen.findByText(mockedResponse.data.title)).toBeInTheDocument();
      expect(screen.getByText(mockedResponse.data.annotation)).toBeInTheDocument();
      expect(screen.getByText(mockedResponse.data.text)).toBeInTheDocument();
      expect(
        screen.queryByText(formatDate(mockedResponse.data.changeDate))
      ).not.toBeInTheDocument();
      expect(screen.getByText(/published/i)).toHaveTextContent(
        formatDate(mockedResponse.data.createDate)
      );
      expect(screen.queryByText(strings.NewsNotFound)).not.toBeInTheDocument();
    });
  });
});
