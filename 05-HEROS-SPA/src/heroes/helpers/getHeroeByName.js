import { heroes } from "../data/heroes";


export const getHeroeByName = (name = '') => {

    if (name.length === 0) {
        return [];
    }

    return heroes.filter(
        heroe => heroe.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

};