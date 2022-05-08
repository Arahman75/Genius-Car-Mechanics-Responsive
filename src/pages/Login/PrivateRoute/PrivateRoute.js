import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        <Spinner animation="border" variant="danger" />
    }
    return (
        <Route 
        {...rest}
        render ={({location})=> user.email ? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>

        }
        >
           
        </Route>
    );
};

export default PrivateRoute;