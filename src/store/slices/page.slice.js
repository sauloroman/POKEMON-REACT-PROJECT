import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
	name: 'page',
      initialState: 1,
      reducers: {
            
            setPage( _store, action ) {
                  return action.payload;
            }

      }
})

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;