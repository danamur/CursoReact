import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks";

export const SimpleForm = () => {

    /* Utilizamos el hook personalizado useForm para gestionar el estado del formulario. */
    const { formState, onInputChange } = useForm({
        username: 'Gambito',
        email: 'example@example.com'
    });

    const { username, email } = formState;

    /* Este useEffect se dispara solo una vez cuando se carga el componente. */
    useEffect(() => {
        //console.log('Se dispara solo una vez cuando se carga el componente');
    }, []);

    /* Este useEffect se dispara cuando obtenemos cambios en el formulario (formState). */
    useEffect(() => {
        //console.log('Se dispara cuando obtenemos cambios en el formulario');
    }, [formState]);

    /* Este useEffect se dispara cuando existen cambios en el email del formulario (email). */
    useEffect(() => {
        //console.log('Se dispara cuando existen cambios en el email del formualario');
    }), [email];

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-light">Simple Form</h1>
                        <form className="d-flex flex-column align-items-center">
                            <input type="text" name="username" className="form-control mb-3" placeholder="Username" value={username} onChange={onInputChange} />
                            <input type="email" name="email" className="form-control mb-3" placeholder="example@example.com" value={email} onChange={onInputChange} />
                        </form>
                        {(username === 'strider2') && <Message />}
                    </div>
                </div>
            </div>
        </>
    );
};
