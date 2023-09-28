import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // Los objetos se deben comparar con toStrictEqual o el toEqual por que apuntan a un espacio en memoria diferente
        expect(testUser).toEqual(user);
    });

    // Tarea
    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const name = 'Daniel';

        // Obtenemos el objeto de usuario
        const user = getUsuarioActivo(name);

        // Creamos nuestro objeto para la prueba
        const testUser = {
            uid: 'ABC567',
            username: name
        }

        expect(user).toEqual(testUser);

    });
});