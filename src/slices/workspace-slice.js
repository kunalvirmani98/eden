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
			console.log ('Action :', action);
			state.workspaceData = { ...state.workspaceData, ...action.payload }
			console.log ('State :', state.workspaceData)
		},
		setUserData : (state, action) => {
			console.log ('Action :', action);
			state.userData = { ...state.userData, ...action.payload }
			console.log ('State :', state.userData)
		},
		setUsageData : (state, action) => {
			console.log ('Action :', action);
			state.usageData = { ...state.usageData, ...action.payload }
			console.log ('State :', state.usageData)
		},
	},
})

export const { setUserData, setWorkspaceData, setUsageData } = workspaceSlice.actions

export default workspaceSlice.reducer
