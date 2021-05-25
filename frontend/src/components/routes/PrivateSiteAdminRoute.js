import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Auth from '../../utils/Auth';


const PrivateSiteAdminRoute = ({component: Component, user, ...rest }) => (
  <Route {...rest} render={props => {
    let authService = new Auth(user);
    if (!authService.isUserAuthenticated() || !authService.isUserSiteAdmin()){
      return <Redirect to="/login"/>;
    }
    return <Component {...props}/>;     
  }}/>
);

const mapStateToProps = state => ({
  user: state.auth 
});

export default connect(mapStateToProps)(PrivateSiteAdminRoute);