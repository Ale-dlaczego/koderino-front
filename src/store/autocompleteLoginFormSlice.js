import { createSlice } from '@reduxjs/toolkit';

export const autocompleteLoginFormSlice = createSlice({
	name: 'autocompleteLoginForm',
	initialState: {
		email: '',
		password: ''
	},
	reducers: {
		setLoginInputs: (state,action) => {
			const { email, password } = action.payload;
			state.email = email;
			state.password = password;
		}
	}
});

export const { setLoginInputs } = autocompleteLoginFormSlice.actions;
export default autocompleteLoginFormSlice.reducer;