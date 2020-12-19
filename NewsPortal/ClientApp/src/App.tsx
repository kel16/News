import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Header } from 'components/Layouts/Header';
import MainPage from 'components/MainPage';
import { NewsPage } from 'components/NewsPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { theme } from '~/theme';

const App: React.FC = () => (
  <React.Suspense fallback={null}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/news/:id" component={NewsPage} />
            <Route path="*" component={() => <>Page doesn&apos;t exist</>} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  </React.Suspense>
);

export default App;
