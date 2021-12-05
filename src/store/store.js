import autocompleteLoginFormSlice from './autocompleteLoginFormSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		autocompleteLoginForm: autocompleteLoginFormSlice
	},
});
