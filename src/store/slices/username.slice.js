import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
	name: 'username',
      initialState: '',
      reducers: {
            setUserName( _store, action ) {
                  return action.payload
            }
      }
})

export const { setUserName } = usernameSlice.actions;

export default usernameSlice.reducer;