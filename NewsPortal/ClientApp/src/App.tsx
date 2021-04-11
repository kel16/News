import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import Homepage from "components/Homepage";
import { Header } from "components/Layouts/Header";
import NewsManagement from "components/NewsManagement";
import NewsPage from "components/NewsPage";
import React, { FC, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "store";
import { theme } from "~/theme";
import { ErrorBoundary } from "./ErrorBoundary";

const App: FC = () => (
  <Suspense fallback={null}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ErrorBoundary>
            <Header />
            <Container>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/news/:id" component={NewsPage} />
                <Route path="/news-management" component={NewsManagement} />
                <Route path="*" component={() => <>Page doesn&apos;t exist</>} />
              </Switch>
            </Container>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </Provider>
  </Suspense>
);

export default App;
