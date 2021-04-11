import { Theme } from "@material-ui/core";

export const styles = (theme: Theme) => ({
  wrapper: {
    margin: theme.spacing(4, 0),
  },
  select: {
    minWidth: "400px",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
});
