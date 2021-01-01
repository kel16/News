import { Paper, Typography, WithStyles, withStyles } from '@material-ui/core';
import { getNewsByGuid } from 'api/news';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { INews } from 'types/INews';
import { formatDate } from 'utils/date';
import { styles } from './styles';

interface IProps extends WithStyles<typeof styles> {}

const NewsPage = withStyles(styles)(({ classes }: IProps) => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<INews>();

  useEffect(() => {
    async function fetchNewsByGuid() {
      const fetchedNews = await getNewsByGuid(id);
      if (fetchedNews.success) {
        setNews(fetchedNews.data);
      }
    }

    fetchNewsByGuid();
  }, [id]);

  if (!news) return null;

  const { title, annotation, text, createDate } = news;

  return (
    <Paper className={classes.paper}>
      <Typography align="center" variant="h5">
        {title}
      </Typography>
      <Typography align="right" variant="subtitle2" color="textSecondary">
        Published: {formatDate(createDate)}
      </Typography>
      <Typography gutterBottom align="justify" className={classes.paragraph}>
        {annotation}
      </Typography>
      <Typography gutterBottom align="justify" className={classes.paragraph}>
        {text}
      </Typography>
    </Paper>
  );
});

export { NewsPage };
