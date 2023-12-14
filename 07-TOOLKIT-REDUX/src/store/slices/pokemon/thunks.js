import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0, pokemonLoading = []) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Ejmplo de peticion con fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        const updatePokemonLoading = [...pokemonLoading, ...data.results];

        dispatch(setPokemons({ pokemons: updatePokemonLoading, page: page + 1 }));
    };
};