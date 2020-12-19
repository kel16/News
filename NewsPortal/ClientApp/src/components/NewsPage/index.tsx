import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Typography, WithStyles, withStyles } from "@material-ui/core";
import { getNewsByGuid } from "api/news";
import { INews } from "types/INews";
import { formatDate } from "utils/date";
import { styles } from "./styles";

interface IProps extends WithStyles<typeof styles> {}

const NewsPage = withStyles(styles)(({ classes }: IProps) => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<INews>();

  useEffect(() => {
    async function fetchNewsByGuid() {
      const news = await getNewsByGuid(id);
      if (news.success) {
        setNews(news.data);
      }
    }

    fetchNewsByGuid();
  }, [id]);

  if (!news) return null;

  const { title, annotation, text, createDate } = news;

  return (
    <Container>
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
    </Container>
  );
});

export { NewsPage };
