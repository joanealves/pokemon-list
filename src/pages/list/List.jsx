import React, { useEffect, useState } from 'react';
import Cards from '../../components/cards/Cards';
import { getAllPokemon, getPokemon } from '../../services/index'

import { useHistory } from "react-router-dom";

import * as S from '../../presentation/styles/global.styles'

const List = () => {
  let history = useHistory();
  const [pokemonsData, setPokemonsData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const allPokemon = await getAllPokemon()
    setNextUrl(allPokemon.next)
    setPrevUrl(allPokemon.previous)

    await loadingPokemon(allPokemon.results)
    setLoading(false)
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async urlPokemon => {
      let pokemonRecord = await getPokemon(urlPokemon.url)
      return pokemonRecord
    })
    )

    setPokemonsData(_pokemonData)
  }

  const handleClick = async () => {
    const pokemon = filteredSearchPokemon()

    let pokemonRecord = await getPokemon(`${initialUrl}/${pokemon[0].id}/`)

    history.push(`/pokemons/${search}`)
  }

  const filteredSearchPokemon = () => {
    const isSearch = search && search.toLowerCase();

    const filtered =
      !pokemonsData || !isSearch
        ? pokemonsData
        : pokemonsData.filter(({ name }) =>
          name.toLowerCase() === isSearch
        );

    return filtered
  }

  return (
    <div>
      <S.FlexWrapper gap="16px">
        <input
          type="text"
          value={search}
          placeholder='Digite aqui o nome de um pokemon'
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <S.Button
          onClick={handleClick}
          disabled={search === ''}
        >
          Buscar
        </S.Button>

      </S.FlexWrapper>


      {loading ? <h1>Loadding...</h1> : (
        <Cards pokemonsData={pokemonsData} />
      )}

    </div>
  );
}

export default List;
