import { getNewsCount } from 'api/news';
import { useEffect, useMemo, useState } from 'react';

const defaultPage = 1;

type IProps = {
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

  const pagesCount = useMemo(() => Math.ceil(totalCount / countPerPage), [
    totalCount,
    countPerPage,
  ]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  return { pagesCount, page, handlePageChange };
};
