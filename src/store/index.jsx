import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slices/search.slice';
import usernameSlice from './slices/username.slice';

export default configureStore({
      reducer: {
            username: usernameSlice,
            search: searchSlice
      }
});