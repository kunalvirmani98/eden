import { configureStore } from '@reduxjs/toolkit'
import workspaceSlice from './slices/workspace-slice';

export default configureStore({
  reducer : {
    workspace: workspaceSlice,
  },
})
