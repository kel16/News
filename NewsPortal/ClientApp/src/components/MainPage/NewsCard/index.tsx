import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  CardActionArea,
  WithStyles,
  Link,
  Card,
  Typography,
  CardContent,
  withStyles,
} from "@material-ui/core";

import { INews } from "types/INews";
import strings from "~/strings";
import { styles } from "./styles";

interface Props extends WithStyles<typeof styles> {
  news: INews;
}

export const NewsCard = withStyles(styles)(({ news, classes }: Props) => {
  const { newsGuid, title, annotation } = news;

  return (
    <Grid item xl>
      <CardActionArea className={classes.cardArea}>
        {/* <Link to={`/news/${newsGuid}`} component={RouterLink}> */}
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {annotation}
              </Typography>
              <Typography variant="subtitle1" color="error">
                {strings.NewsCardButtonMore}
              </Typography>
            </CardContent>
          </div>
        </Card>
        {/* </Link> */}
      </CardActionArea>
    </Grid>
  );
});
