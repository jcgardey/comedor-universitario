import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserSiteAdmin } from '../../utils/auth';

const PrivateSiteAdminRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth);
  if (user.loading) return <h1>Loading user..</h1>;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user.isAuthenticated || !isUserSiteAdmin(user)) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateSiteAdminRoute;
