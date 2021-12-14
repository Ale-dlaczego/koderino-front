import { useEffect, useState } from 'react';

import api from '../config/api';

export const useAxios = ({url,method , data = null, config = null} ) => {
	const [error, setError] = useState(null);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(true);

	
	const fetchData = async () => {
		try {
			const res = await api[method](url, method === 'get' ? config : data, method === 'get' ? data : config);
			setResponse(res.data);
			setLoading(false);
			setError(null);
		} catch (error) {
			const resErrors = error.response.data.message;
			setError(typeof resErrors === 'object' ? [...resErrors] : [resErrors]);
			setLoading(false);
		}
	}; 
		
	useEffect(() => {
		if(method === 'get') fetchData();
	}, []);
	
	
	return {error, response, loading, fetchData};
};

