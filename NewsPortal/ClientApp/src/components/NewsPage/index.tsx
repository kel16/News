import { CircularProgress, Paper, Typography, WithStyles, withStyles } from "@material-ui/core";
import { INewsByGuidResponse } from "api/models";
import { getNewsByGuid } from "api/news";
import { useToggle } from "hooks";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "utils/date";
import { styles } from "./styles";

interface IProps extends WithStyles<typeof styles> {}

const NewsPage = withStyles(styles)(({ classes }: IProps) => {
  const { id } = useParams<{ id: string }>();
  const [newsResponse, setNewsResponse] = useState<INewsByGuidResponse>();
  const [isLoading, toggleLoading] = useToggle();

  useEffect(() => {
    async function fetchNewsByGuid() {
      toggleLoading();
      const fetchedNews = await getNewsByGuid(id);
      setNewsResponse(fetchedNews);
      toggleLoading();
    }

    fetchNewsByGuid();
  }, [id]);

  if (isLoading)
    return (
      <Paper className={classes.paper}>
        <CircularProgress />
      </Paper>
    );

  if (!newsResponse?.success)
    return (
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">
          Requested news not found.
        </Typography>
      </Paper>
    );

  const { title, annotation, text, createDate } = newsResponse?.data;

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
