import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Link,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { INews } from "types/INews";
import strings from "~/strings";
import { styles } from "./styles";

interface IProps extends WithStyles<typeof styles> {
  news: INews;
}

const NewsCard = withStyles(styles)(({ news, classes }: IProps) => {
  const { newsGuid, title, annotation } = news;

  return (
    <Grid item xl>
      <CardActionArea className={classes.cardArea}>
        <Link to={`/news/${newsGuid}`} component={RouterLink}>
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
                  {" "}
                  {strings.NewsCardButtonMore}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  );
});

export { NewsCard };
