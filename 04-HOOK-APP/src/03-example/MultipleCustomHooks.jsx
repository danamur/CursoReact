import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    /* Utilizamos el hook personalizado useCounter para gestionar un contador con valor inicial 1. */
    const { counter, increment } = useCounter(1);

    /**
     * Utilizamos el hook personalizado useFetch para obtener datos de una API externa.
     * Este ejemplo obtiene citas de la serie Breaking Bad desde 'https://api.breakingbadquotes.xyz/v1/quotes/' seguido del valor actual del contador.
     */
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    /* Asignamos los valores de autor (author) y cita (quote) basados en los datos obtenidos de la API. */
    const { author, quote } = !!data && data[0];

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-light">Breaking Bad</h1>

                        {isLoading ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        ) : (
                            <blockquote className="blockquote text-light text-end">
                                <p className="mb-3">"{quote}"</p>
                                <footer className="blockquote-footer">{author}</footer>
                            </blockquote>
                        )};
                    </div>
                    <div className="col-12 text-end">
                        <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>Next quote</button>
                    </div>
                </div>
            </div>
        </>
    );
};
