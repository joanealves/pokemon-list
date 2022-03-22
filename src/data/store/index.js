import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import PokemonSlice from '../../pages/list/state/PokemonSlice'

const store = configureStore({
    reducer: {
        pokemon: PokemonSlice
    },
  })
  
  export const useAppDispatch = () => useDispatch()
  
  export default store