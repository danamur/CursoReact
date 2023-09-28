test('Esta prueba no debe fallar', () => {
    if (0 === 1) {
        throw new Error('No puede dividir entre cero');
    }
});