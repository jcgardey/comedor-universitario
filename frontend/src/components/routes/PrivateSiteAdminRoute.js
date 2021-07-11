import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserSiteAdmin } from '../../utils/auth';

const PrivateSiteAdminRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log('llega', user);
        if (!user.isAuthenticated || !isUserSiteAdmin(user)) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateSiteAdminRoute;
