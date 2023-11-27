import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

describe('Pruebas en <PublicRoute />', () => {
    test('Debe de mostrar el children si no esta autenticado. ', () => {
        
        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta publica')).toBeTruthy();

    });
});