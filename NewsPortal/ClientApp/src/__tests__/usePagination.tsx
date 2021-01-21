import { act, renderHook } from "@testing-library/react-hooks";
import { getNewsCount as mockGetNewsCount } from "api/news";
import { usePagination } from "hooks/usePagination";

jest.mock("api/news");

describe("usePagination", () => {
  it("should call api once and count pages", async () => {
    (mockGetNewsCount as jest.Mock).mockResolvedValueOnce({ success: true, data: 20 });

    const { result, waitForNextUpdate } = renderHook((props) => usePagination(props), {
      initialProps: { countPerPage: 5 },
    });

    expect(mockGetNewsCount).toHaveBeenCalledTimes(1);
    await waitForNextUpdate(); // update is asynchronous so we have to wait
    expect(result.current.pagesCount).toBe(4);
  });

  it("should not have current page outside range when a number of items per page changes", async () => {
    (mockGetNewsCount as jest.Mock).mockResolvedValueOnce({ success: true, data: 10 });

    const { result, rerender, waitForNextUpdate } = renderHook((props) => usePagination(props), {
      initialProps: { countPerPage: 5 },
    });

    expect(result.current.page).toBe(1);

    await act(async () => {
      const handleChange = jest.fn();
      result.current.handlePageChange(handleChange(), 2);
      await waitForNextUpdate();
    });
    expect(result.current.page).toBe(2);

    rerender({ countPerPage: 10 });
    expect(result.current.page).toBe(1);
  });
});
