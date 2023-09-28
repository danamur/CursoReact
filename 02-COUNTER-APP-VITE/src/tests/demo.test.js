describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe fallar', () => {
        /** Inicializacion */
        const meessage1 = 'Hola Mundo';
    
        /** Estimulo */
        const message2 = meessage1.trim();
    
        /** Obesarvar el comportamiento esperado */
        expect(meessage1).toBe(message2);
    });
});