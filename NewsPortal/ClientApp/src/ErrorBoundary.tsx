import { Box, Link, Typography } from "@material-ui/core";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught client-side error: ", error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Box m={3}>
          <Typography variant="h3" gutterBottom>
            Uncaught client error
          </Typography>
          <Typography>Sorry for the inconvenience</Typography>
          <Typography color="error">
            <Link to="/" component={RouterLink}>
              Click here to return to Home page
            </Link>
          </Typography>
        </Box>
      );
    }

    return children;
  }
}

export { ErrorBoundary };
