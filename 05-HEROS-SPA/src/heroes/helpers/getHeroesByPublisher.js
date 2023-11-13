import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher, page = 1, pageSize = 4 ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    };

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return heroes.filter( heroe => heroe.biography.publisher === publisher)
    .slice(startIndex, endIndex);

};