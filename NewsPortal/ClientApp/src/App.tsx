import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Header } from "components/Layouts/Header";
import MainPage from "components/MainPage";
import { NewsPage } from "components/NewsPage";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme } from "~/theme";
import { ErrorBoundary } from "./ErrorBoundary";

const App: React.FC = () => (
  <Suspense fallback={null}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ErrorBoundary>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/news/:id" component={NewsPage} />
              <Route path="*" component={() => <>Page doesn&apos;t exist</>} />
            </Switch>
          </Container>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  </Suspense>
);

export default App;
