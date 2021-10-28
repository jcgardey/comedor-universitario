import React, { useEffect } from 'react';
import { render } from 'react-dom';

import store from '../store';
import { Provider } from 'react-redux';
import EditMenuPage from './menu/EditMenuPage';
import Login from './Login';
import { GlobalStyles } from '../styles/GlobalStyles';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { getLoggedUser } from '../actions/auth';
import PrivateSiteAdminRoute from './routes/PrivateSiteAdminRoute';
import CalendarPage from './calendar/CalendarPage';
import HomeRoute from './routes/HomeRoute';
import MenuListPage from './menu/MenuListPage';

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
            <PrivateSiteAdminRoute path="/menus/new" component={EditMenuPage} />
            <PrivateSiteAdminRoute path="/menus" component={MenuListPage} />
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
