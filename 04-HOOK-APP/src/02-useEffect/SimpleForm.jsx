import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'example@example.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [ name ]: value });
    };

    useEffect(() => {
      console.log('Se dispara solo una vez cuando se carga el componente');
    }, []);
    
    useEffect(() => {
        console.log('Se dispara cuando obtenemos cambios en el formulario');
    }, [ formState ]);

    useEffect(() => {
        console.log('Se dispara cuando existen cambios en el email del formualario');
    }), [ email ];

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-light">Simple Form</h1>
                        <form className="d-flex flex-column align-items-center">
                            <input type="text" name="username" className="form-control mb-3" placeholder="Username" value={ username } onChange={ onInputChange }/>
                            <input type="email" name="email" className="form-control mb-3" placeholder="example@example.com" value={ email } onChange={ onInputChange }/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
