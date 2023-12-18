import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0, pokemonLoading = []) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Ejmplo de peticion con fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();

        const { data: pokemonList } = await pokemonApi.get(`/pokemon?limit=20&offset=${page * 20}`);

        const pokemonDetails = await Promise.all(
            pokemonList.results.map(async (pokemon) => {
                const {data: details } = await pokemonApi.get(`/pokemon/${pokemon.name}`);
                return details;
            })
        );

        const updatePokemonLoading = [...pokemonLoading, ...pokemonDetails];

        console.log(updatePokemonLoading);

        dispatch(setPokemons({ pokemons: updatePokemonLoading, page: page + 1 }));
    };
};