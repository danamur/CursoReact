import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    test('Debe de hacer match con el snapshot ', () => {
        
        const title = 'Bienvenido, Dwight';
        const { container } = render( <FirstApp title={ title }/>);

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el titulo en un h1', () => {
        
        const title = 'Bienvenido, Dwight';
        const { container, getByText } = render( <FirstApp title={ title }/>);

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    });

});