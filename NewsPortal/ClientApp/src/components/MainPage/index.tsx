import { Divider, Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { getNews } from 'api/news';
import { usePagination } from 'hooks/index';
import React, { FC, useEffect, useState } from 'react';
import { INews } from 'types/INews';
import strings from '~/strings';
import { NewsCard } from './NewsCard';
import { styles } from './styles';

const defaultCountPerPage = 5;

interface IProps extends WithStyles<typeof styles> {}

const MainPage: FC<IProps> = ({ classes }) => {
  const [news, setNews] = useState<INews[]>([]);
  const { pagesCount, page, handlePageChange } = usePagination({
    countPerPage: defaultCountPerPage,
  });

  useEffect(() => {
    async function fetchNews() {
      const response = await getNews({ page, quantity: defaultCountPerPage });

      if (response.success) {
        setNews(response.data);
      }
    }

    fetchNews();
  }, [page]);

  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          {strings.MainPageTitle}
        </Typography>
        <Divider />
        {news.map((item) => (
          <NewsCard key={item.newsGuid} news={item} />
        ))}
        <Grid item className={classes.pagination}>
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
    </Grid>
  );
};

export default withStyles(styles)(MainPage);
