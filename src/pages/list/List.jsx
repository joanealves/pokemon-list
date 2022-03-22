import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../data/store'
import { setInfoPokemon } from './state/PokemonSlice'
import Cards from '../../components/cards/Cards';
import { getAllPokemon, getPokemon } from '../../services/index'

import { useHistory } from "react-router-dom";

import * as S from '../../presentation/styles/global.styles'
import { Search, Input } from './List.styles'
import InfoModal from '../../components/modal/InfoModal';


const List = () => {
  const dispatch = useAppDispatch()
  let history = useHistory();
  const [pokemonsData, setPokemonsData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
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
    dispatch(setInfoPokemon(pokemonRecord))

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

  const handleClickPreview = async () => {
    let infoNextPage = await getPokemon(nextUrl)
    setNextUrl(infoNextPage.next)
    setPrevUrl(infoNextPage.previous)

    await loadingPokemon(infoNextPage.results)
    setLoading(false)
  }

  const handleClickNext = async () => {
    let infoNextPage = await getPokemon(nextUrl)
    setNextUrl(infoNextPage.next)
    setPrevUrl(infoNextPage.previous)

    await loadingPokemon(infoNextPage.results)
    setLoading(false)
  }

  return (
    <div>
      <Search>
        <Input
          type="text"
          value={search}
          placeholder='Digite o nome de um pokemon'
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <S.Button
          onClick={handleClick}
          disabled={search === ''}
        >
          Buscar
        </S.Button>

        <div>
          <S.Button 
          onClick={handleClickPreview}
          disabled={prevUrl === null}
          >
            {`<`}
          </S.Button>
          <S.Button onClick={handleClickNext}>
            {`>`}
          </S.Button>
        </div>

      </Search>
      <InfoModal  isOpen={isOpenModal} onRequestClose={() => setIsOpenModal(false)}/>

      {loading ? <h1>Loadding...</h1> : (
        <Cards pokemonsData={pokemonsData} setIsOpenModal={setIsOpenModal} />
      )}

    </div>
  );
}

export default List;
