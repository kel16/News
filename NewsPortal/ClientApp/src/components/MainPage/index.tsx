import {
  CircularProgress,
  Divider,
  Grid,
  MenuItem,
  Select,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { getNews } from "api/news";
import { useToggle } from "hooks";
import { usePagination } from "hooks/index";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { INews } from "types/INews";
import strings from "~/strings";
import { NewsCard } from "./NewsCard";
import { styles } from "./styles";

const countPerPageOptions = [5, 10, 50];

interface IProps extends WithStyles<typeof styles> {}

const MainPage: FC<IProps> = ({ classes }) => {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, toggleLoading] = useToggle();
  const [countPerPage, setCountPerPage] = useState(countPerPageOptions[0]);
  const { pagesCount, page, handlePageChange } = usePagination({
    countPerPage,
  });

  useEffect(() => {
    async function fetchNews() {
      toggleLoading();
      const response = await getNews({ page, quantity: countPerPage });

      if (response.success) {
        setNews(response.data);
        toggleLoading();
      }
    }

    fetchNews();
  }, [page, countPerPage]);

  const handleChangeCount = (event: ChangeEvent<{ value: unknown }>) => {
    setCountPerPage(event.target.value as number);
  };

  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {strings.MainPageTitle}
          </Typography>
          <Divider />
          {news.map((item) => (
            <NewsCard key={item.newsGuid} news={item} />
          ))}
          <Grid item className={classes.pagination}>
            <Select value={countPerPage} onChange={handleChangeCount}>
              {countPerPageOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <Pagination
              count={pagesCount}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(styles)(MainPage);
