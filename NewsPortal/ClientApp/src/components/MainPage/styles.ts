import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  mainGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
  },
});
