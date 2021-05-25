import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import NewMenu from '../menu/NewMenu';
import { useSelector } from 'react-redux';
import Auth from '../../utils/Auth';


const HomeRoute = ({ ...rest }) => {
  const user = useSelector(state => state.auth);
  return (
    <Route {...rest} render={props => {
      let authService = new Auth(user);
      if (!authService.isUserAuthenticated()) {
        return <LandingPage {...props} />;
      }
      else {
        //console.log("is authenticated");
        if (authService.isUserSiteAdmin() || authService.isUserSuperAdmin()) {
          //console.log("is site admin");
          return <NewMenu {...props} />;
        }
      }
    }} />
  );};

export default HomeRoute;