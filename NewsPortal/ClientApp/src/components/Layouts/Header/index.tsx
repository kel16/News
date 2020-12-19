import {
  AppBar,
  Button,
  Link,
  Toolbar,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { styles } from './styles';

interface IProps extends WithStyles<typeof styles> {}

export const Header = withStyles(styles)(({ classes }: IProps) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
        <Link to="/" component={RouterLink}>
          News Portal
        </Link>
      </Typography>
      <Button color="inherit">Log in</Button>
    </Toolbar>
  </AppBar>
));
