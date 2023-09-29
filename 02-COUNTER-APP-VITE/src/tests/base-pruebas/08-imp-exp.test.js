import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 05-funciones', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
    
        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();

    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest.length).toBe(3);
        expect(heroesTest).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    });
});