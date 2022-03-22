import { createSlice } from '@reduxjs/toolkit'

const PokemonSlice = createSlice({
    name: 'pokemon', 
    initialState: {
        data: {
            infoPokemon: [],
        }
    },
    reducers: {
        setInfoPokemon: (state, action) => {
            state.data.infoPokemon = action.payload
        },
    }
})

export default PokemonSlice.reducer

export const {
    setInfoPokemon
} = PokemonSlice.actions

export const selectPokemonSliceData = state => state.pokemon.data