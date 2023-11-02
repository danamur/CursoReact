import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {

    /**
     * Utilizamos un hook personalizado para manejar el estado del formulario.
     * Esto nos permite reutilizar el código para diferentes formularios.
     * @param {object} formState - El estado actual del formulario.
     * @param {function} onInputChange - Función para manejar cambios en los campos del formulario.
     * @param {function} onResetForm - Función para restablecer el formulario a su estado inicial.
     */
    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-light">Simple Form Custom Hook</h1>
                        <form className="d-flex flex-column align-items-center">
                            <input type="text" name="username" className="form-control mb-3" placeholder="Username" value={username} onChange={onInputChange} />
                            <input type="email" name="email" className="form-control mb-3" placeholder="example@example.com" value={email} onChange={onInputChange} />
                            <input type="password" name="password" className="form-control mb-3" placeholder="Password" value={password} onChange={onInputChange} />
                            <button className="btn btn-danger mx-2" onClick={() => onResetForm()}>Borrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};