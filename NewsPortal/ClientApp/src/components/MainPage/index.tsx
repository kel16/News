import { Divider, Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import { getNews } from 'api/news';
import React, { FC, useEffect, useState } from 'react';
import { INews } from 'types/INews';

import strings from '~/strings';

import { NewsCard } from './NewsCard';
import { styles } from './styles';

interface IProps extends WithStyles<typeof styles> {}

const MainPage: FC<IProps> = ({ classes }) => {
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await getNews();

      if (response.success) {
        setNews(response.data);
      }
    }

    fetchNews();
  }, []);

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
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MainPage);
