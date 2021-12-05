import Constants from '../Constants';
import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
	if (localStorage.getItem(Constants.TOKEN_KEY)) {
		return {
			token: JSON.parse(localStorage.getItem(Constants.TOKEN_KEY))
		};
	} else if (Cookies.get(Constants.TOKEN_KEY)) {
		return {
			token : JSON.parse(Cookies.get(Constants.TOKEN_KEY))
		};
	} else {
		return {
			token: null
		};
	}
};

export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState: getInitialState(),
	reducers: {
		setToken:(state, action) => {
			state.token = action.payload;
		},
		removeToken: (state) => {
			state.token = null;
		}
	}
});


export const { setToken, removeToken } = authorizationSlice.actions;
export default authorizationSlice.reducer;