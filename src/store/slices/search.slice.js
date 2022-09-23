import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
	name: 'search',
      initialState: { type: '', pokemonName: ''},
      reducers: {
            setSearchType( store, action ) {
                  return {
                        ...store,
                        type: action.payload
                  }
            },
            setSearchName( store, action ) {
                  return {
                        ...store,
                        pokemonName: action.payload
                  }
            }
      }
})

export const { setSearchType, setSearchName } = searchSlice.actions;

export default searchSlice.reducer;