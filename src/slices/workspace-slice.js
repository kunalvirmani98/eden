import { createSlice } from '@reduxjs/toolkit'

export const workspaceSlice = createSlice({
	name: 'workspace',
	initialState: {
		userData      : {},
		workspaceData : {},
		usageData     : {},
	},
	reducers: {
		setWorkspaceData : (state, action) => {
			state.data = { ...state.data, ...action.payload }
		},
		setUserData : (state, action) => {
			state.data = { ...state.userData, ...action.payload }
		},
		setUsageData : (state, action) => {
			state.data = { ...state.usageData, ...action.payload }
		},
	},
})

export const { setUserData, setWorkspaceData, setUsageData } = workspaceSlice.actions

export default workspaceSlice.reducer
