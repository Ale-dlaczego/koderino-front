import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from './config/api';
import { setUser } from './store/userSlice';

function App() {

	const token = useSelector(state => { return state.authorization.token; });
	const dispatch = useDispatch();

	useEffect( async () => {
		api.defaults.headers.common['Authorization'] = token;
		const res = await api.get('users/me');
		if (res.data) dispatch(setUser(res.data));
		else {
			dispatch(setUser({email: ''}));
		}
	}, [token]);
	

	return <></>;
}

export default App;
