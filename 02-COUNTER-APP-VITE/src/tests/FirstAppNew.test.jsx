import { render, screen } from '@testing-library/react'
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {

    const title = 'Bienvenido, Dwight';
    const subTitle = "Soy un subtitulo";

    test('pruebas en <FirstApp /> ', () => {

        const { container } = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el mensaje "Bienvenido, Dwight', () => {
       
        render( <FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();

    });

    test('Debe de mostrar el titulo en un h1', () => {

        render( <FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain(title);

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        render( <FirstApp title={title} />);
        expect(screen.getAllByText(subTitle).length).toBe(1);

    });

});