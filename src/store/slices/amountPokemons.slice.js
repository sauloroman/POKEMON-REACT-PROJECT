import { createSlice } from '@reduxjs/toolkit';

export const amountPokemonsSlice = createSlice({
	name: 'amountPokemons',
      initialState: 20,
      reducers: {
            
            setAmount( _store, action ) {
                  return action.payload;
            }

      }
})

export const { setAmount } = amountPokemonsSlice.actions;

export default amountPokemonsSlice.reducer;