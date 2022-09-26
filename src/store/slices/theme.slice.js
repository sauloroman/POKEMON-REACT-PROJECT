import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
      initialState: 'theme-light',
      reducers: {
            
            setTheme( _store, action ) {
                  return action.payload;
            }

      }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;