import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Route } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

const Auth = ({ loggedIn, path, component: Component})=>(
    <Route
    path={path}
    render={props=>
        loggedin ?   <Redirect to="/"/> : <Component {...props}/>
    }
    />
)

const Protected = ({ loggedIn, path, component: Component}) => (
    <Route
    path={path}
    render={props=>
        loggedin ? <Component {...props} /> : <Redirect to="/signup" />
    }
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));