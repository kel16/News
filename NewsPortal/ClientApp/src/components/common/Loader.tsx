import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";

interface IProps {
  text?: string;
}

export const Loader = ({ text = "Please wait..." }: IProps) => (
  <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
    <Grid item>
      <CircularProgress />
    </Grid>
    <Grid item>
      <Typography variant="body1" gutterBottom>
        {text}
      </Typography>
    </Grid>
  </Grid>
);
