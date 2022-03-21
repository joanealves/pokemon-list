import React,{ useEffect,useState } from 'react';
import Cards from '../../components/cards/Cards';
import { getAllPokemon, getPokemon } from '../../services/index'

const List = () => {
    const [pokemonsData,setPokemonsData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const allPokemon = await  getAllPokemon()
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
    return (
        <div>
            List
            <input 
                type="search"
                value={search}
                placeholder='Buscar'
                onChange={(ev)=>setSearch(ev.target.value)}
            />    
            {loading ? <h1>Loadding...</h1> : (
               <Cards pokemonsData={pokemonsData}/>
            )}

        </div>
    );
}

export default List;
