import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { removeToken } from '../store/authorizationSlice';
import { useNavigate } from 'react-router';

const HomeView = () => {

	const user = useSelector(state => { return state.user.user; });
	const dispatch = useDispatch();
	const navigate = useNavigate();

	

	return (
		<div>
			<h1>{user.email}</h1>
			<button onClick={() => {
				dispatch(removeToken());
				navigate('/login');
			}}>Logout</button>
		</div>
	);
};

export default HomeView;
