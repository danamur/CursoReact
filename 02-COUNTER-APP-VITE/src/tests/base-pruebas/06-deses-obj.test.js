import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Pruebas en 05-funciones', () => {
    test('useContext debe retornar un objeto', () => {

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const {
            nombre,
            edad,
            clave
        } = persona;

        const testUseContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const useContext = usContext(persona);

        expect(testUseContext).toEqual(useContext);

    });
});