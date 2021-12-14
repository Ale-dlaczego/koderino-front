import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {
			email: '',
			userData: {
				phoneNumber: '',
				localization: '',
				name: ''
			}
		},
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setUserData: (state, action) => {
			state.user.userData = action.payload;
		},
		
	}
});

export const { setUser, setUserData } = userSlice.actions;
export default userSlice.reducer;