import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../../services/authenticationService';

const PrivateRoute = (props) => (
    <Fragment>
        {authenticationService.currentUserValue ? props.children : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    </Fragment>
        /*
        if (roles && roles.indexOf(currentUser.role) === -1) {
           
            return <Redirect to={{ pathname: '/'}} />
        }

        */

)

export default PrivateRoute;