import { useRef } from "react";

export const FocusScreen = () => {

    /* Usamos useRef para crear una referencia al elemento input. */
    const inputRef = useRef();

    /* La función setFocus se encarga de enfocar el elemento input cuando se hace clic en el botón "Set focus".*/
    const setFocus = () => {
        /* Selecciona todo el contenido del input, lo que hace que se enfoque. */
        inputRef.current.select();
    };

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-light">Focus Screen</h1>
                        <input type="text" className="form-control my-4" placeholder="Ingrese su nombre" ref={inputRef} />
                        <button className="btn btn-primary" onClick={setFocus}>Set focus</button>
                    </div>
                </div>
            </div>
        </>
    );
};
