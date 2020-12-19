import * as React from "react";
import { useEffect, useState, FC } from "react";
import { Grid, Divider, Typography, WithStyles, withStyles } from "@material-ui/core";

import { getNews } from "api/news";
import { INews } from "types/INews";
import strings from "~/strings";
import { styles } from "./styles";
import { NewsCard } from "./NewsCard";

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
