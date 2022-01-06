import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserInGroup } from '../../utils/auth';

export const PrivateRoute = ({ component: Component, userGroup, ...rest }) => {
  const user = useSelector((state) => state.auth);
  if (user.loading) return <h1>Loading user..</h1>;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user.isAuthenticated || !isUserInGroup(user, userGroup)) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};
