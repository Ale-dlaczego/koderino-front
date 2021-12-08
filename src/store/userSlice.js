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
		
	}
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;