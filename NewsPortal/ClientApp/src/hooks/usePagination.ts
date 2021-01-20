import { getNewsCount } from "api/news";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

const defaultPage = 1;

export type IProps = {
  countPerPage: number;
  currentPage?: number;
};

export const usePagination = ({ countPerPage, currentPage = defaultPage }: IProps) => {
  const [page, setPage] = useState(currentPage);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchNewsCount() {
      const response = await getNewsCount();

      if (response.success) {
        setTotalCount(response.data);
      }
    }

    fetchNewsCount();
  }, []);

  const getPagesCount = () => Math.ceil(totalCount / countPerPage);

  const pagesCount = useMemo(() => getPagesCount(), [totalCount, countPerPage]);

  useEffect(() => {
    const maxCountOfPages = getPagesCount();

    if (page > maxCountOfPages) {
      setPage(maxCountOfPages || defaultPage);
    }
  }, [countPerPage]);

  const handlePageChange = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  return { pagesCount, page, handlePageChange };
};
