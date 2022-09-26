import { configureStore } from '@reduxjs/toolkit'
import amountPokemonsSlice from './slices/amountPokemons.slice';
import pageSlice from './slices/page.slice';
import searchSlice from './slices/search.slice';
import themeSlice from './slices/theme.slice';
import usernameSlice from './slices/username.slice';

export default configureStore({
      reducer: {
            page: pageSlice,
            username: usernameSlice,
            search: searchSlice,
            theme: themeSlice,
            amountPokemons: amountPokemonsSlice
      }
});