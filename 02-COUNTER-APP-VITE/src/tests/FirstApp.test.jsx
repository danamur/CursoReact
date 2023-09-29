import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    /*test('Debe de hacer match con el snapshot ', () => {
        
        const title = 'Bienvenido, Dwight';
        const { container } = render( <FirstApp title={ title }/>);

        expect(container).toMatchSnapshot();

    });*/

    test('Debe de mostrar el titulo en un h1', () => {
        
        const title = 'Bienvenido, Dwight';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/>);

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);

    });

    test('Debe de mostrar el subtitulo enviado por props ', () => {
        
        const title = 'Bienvenido, Dwight';
        const subTitle = 'Soy un subtitulo';
        const { getByText, getByTestId } = render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect(getByText(subTitle)).toBeTruthy();

    });

});