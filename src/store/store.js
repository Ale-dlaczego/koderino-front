import authorizationSlice from './authorizationSlice';
import autocompleteLoginFormSlice from './autocompleteLoginFormSlice';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export default configureStore({
	reducer: {
		autocompleteLoginForm: autocompleteLoginFormSlice,
		authorization: authorizationSlice,
		user: userSlice

	},
});
