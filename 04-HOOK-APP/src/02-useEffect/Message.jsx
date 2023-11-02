import { useEffect, useState } from "react"

export const Message = () => {

    /** Ya que estamos utilizando un useState para poder mostrar en pantalla las coords,
     * Necesitamos un return del useEffect removiendo la referencia en memoria de la funcion
     * De lo contrario se estaria ejecutando un procedimiento que no es recomendado.
     */
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])


    return (
        <>
            <h3 className="text-light">Usuario ya existe</h3>
            <p className="text-light">{JSON.stringify(coords)}</p>
        </>
    )
}
