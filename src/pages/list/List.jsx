import React,{ useEffect,useState } from 'react';
import { getAllPokemon } from '../../services/index'

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
        console.log(allPokemon) 
        setNextUrl(allPokemon.next)
        setPrevUrl(allPokemon.previous)
        setLoading(false)
    }

    return (
        <div>
            List
            <input 
                type="search"
                value="Buscar"
                onChange={(ev)=>setSearch(ev.target.value)}
            />    
            {loading ? <h1>Loadding...</h1> : (
                <h1> Data is fetched </h1>
            )}

        </div>
    );
}

export default List;