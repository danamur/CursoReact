import { useEffect, useState } from "react";

/**
 * Hook personalizado para realizar una solicitud de datos a una URL y gestionar su estado.
 * @param {string} url - La URL a la que se realizará la solicitud.
 * @returns {object} - Un objeto que contiene los datos, el estado de carga y cualquier error.
 */
export const useFetch = (url) => {

    const initialState = {
        data: null,
        isLoading: true,
        hasError: null
    };

    /* Usamos el estado local para gestionar el estado de la solicitud. */
    const [state, setState] = useState(initialState);

    /* Función asincrónica para realizar la solicitud y actualizar el estado. */
    const fetchData = async () => {
        try {
            /* Iniciamos la carga de datos. */
            setState({
                ...state,
                isLoading: true,
                hasError: null
            });

            /* Realizamos la solicitud a la URL. */
            const resp = await fetch(url);

            /* Verificamos si la solicitud fue exitosa. */
            if (!resp.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }

            /* Parseamos la respuesta a formato JSON. */
            const data = await resp.json();

            /* Actualizamos el estado con los datos y marcamos la carga como completa. */
            setState({
                data: data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            /* Si ocurre un error, actualizamos el estado con el error. */
            setState({
                ...state,
                isLoading: false,
                hasError: error.message
            });
        }
    }

    /* Utilizamos useEffect para realizar la solicitud cuando cambia la URL. */
    useEffect(() => {
        fetchData();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}