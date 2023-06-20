import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authenSlice = createSlice({
	name: 'user',
	initialState: null,
	reducers: {
		login(state: any, action: PayloadAction<any>) {
			return action.payload;
		},
		logout(state: any, action: PayloadAction<any>) {
			return null;
		},
	},
});
const { actions, reducer } = authenSlice;
export const { login, logout } = actions;
export default reducer;
