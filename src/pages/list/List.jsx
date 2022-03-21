import React,{ useEffect,useState } from 'react';
import { getAllPokemon } from '../../services/index'

const List = () => {
    const [pokemonsData,setPokemonsData] = useState([]);
    const [nestUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        teste()
    }, [])

    const teste = async () => {
        const user = await  getAllPokemon()
        console.log(user)       
    }

    return (
        <div>
            List
        </div>
    );
}

export default List;
