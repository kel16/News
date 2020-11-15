import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "~/theme";
import { Header } from "components/Layouts/Header";
import MainPage from "components/MainPage";
import { NewsPage } from "components/NewsPage";

const App: React.FC = () => (
  <React.Suspense fallback={null}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="*" component={() => <>Page doesn't exist</>} />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.Suspense>
);

export default App;
