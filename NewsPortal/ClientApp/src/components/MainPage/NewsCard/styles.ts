import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  cardArea: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});
