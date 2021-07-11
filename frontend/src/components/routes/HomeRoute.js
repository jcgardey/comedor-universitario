import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import NewMenu from '../menu/NewMenu';
import { useSelector } from 'react-redux';
import { isUserSiteAdmin } from '../../utils/auth';

const HomeRoute = ({ ...rest }) => {
  const user = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user.isAuthenticated) {
          return <LandingPage {...props} />;
        }
        if (isUserSiteAdmin(user)) {
          console.log('llegaa');
          return <NewMenu {...props} />;
        }
      }}
    />
  );
};

export default HomeRoute;
