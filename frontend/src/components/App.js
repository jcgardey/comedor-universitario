import React, { useEffect } from 'react';
import { render } from 'react-dom';

import store from '../store';
import { Provider } from 'react-redux';
import NewMenu from './menu/NewMenu';
import Login from './Login';
import { GlobalStyles } from '../styles/GlobalStyles';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { getLoggedUser } from '../actions/auth';
import PrivateSiteAdminRoute from './routes/PrivateSiteAdminRoute';
import HomeRoute from './routes/HomeRoute';
import CalendarPage from './calendar/CalendarPage';

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
          <Switch>
            <HomeRoute exact path="/" />
            <Route path="/login" component={Login} />
            <PrivateSiteAdminRoute path="/new_menu" component={NewMenu} />
            <Route path="/calendar" component={CalendarPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;

const container = document.getElementById('app');
render(<App />, container);
