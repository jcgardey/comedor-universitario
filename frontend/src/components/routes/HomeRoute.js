import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import EditMenuPage from '../menu/EditMenuPage';
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
          return <EditMenuPage {...props} />;
        }
      }}
    />
  );
};

export default HomeRoute;
