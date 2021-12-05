import React, {useEffect} from 'react';
import { Route, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

export const AuthRoute = ({ children }) => {
    
	const token = useSelector(state => { return state.authorization.token; });
	const navigate = useNavigate();
    
    
	useEffect(() => {
		if (!token) navigate('/login');
	},[]);

	return token ? children : <></>;
};
