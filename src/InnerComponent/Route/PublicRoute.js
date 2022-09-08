import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './index';

import  {TOKEN}  from '../../InnerComponent/Route/index';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

	let userrole = localStorage.getItem(TOKEN);
	let redirectRoute = '';
	if (userrole === 'admin') {
		redirectRoute = "/admin"	
	}else if (userrole === 'user') {
		redirectRoute = "/user"
	}else if (userrole === 'doctor'){
		redirectRoute = "/doctor"
	}else{
		redirectRoute ="/"
	}
	
	return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Redirect to={redirectRoute} />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;