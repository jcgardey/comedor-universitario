import React, { useEffect } from 'react';
import { render } from 'react-dom';

import store from '../store';
import { Provider } from 'react-redux';
import Login from './Login';
import { GlobalStyles } from '../styles/GlobalStyles';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { getLoggedUser } from '../actions/auth';
import { PrivateRoute } from './routes/PrivateRoute';
import CalendarPage from './calendar/CalendarPage';
import HomeRoute from './routes/HomeRoute';
import MenuListPage from './menu/MenuListPage';
import { Navigation } from './nav/Navigation';
import { SITE_ADMIN } from '../utils/auth';

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.dispatch(getLoggedUser());
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <HomeRoute exact path="/" />
            <Route path="/login" component={Login} />
            <PrivateRoute
              path="/menus"
              component={MenuListPage}
              userGroup={SITE_ADMIN}
            />
            <PrivateRoute
              path="/calendar"
              component={CalendarPage}
              userGroup={SITE_ADMIN}
            />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;

const container = document.getElementById('app');
render(<App />, container);
