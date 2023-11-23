import { useState } from "react";

/**
 * Un hook personalizado para gestionar el estado de los formularios.
 * @param {*} initialForm: Un objeto que define el estado inicial del formulario.
 * @returns {formState, onInputChange, onResetForm}: Un objeto con el estado del formulario, una función para manejar cambios en el formulario y una función para restablecer el formulario a su estado inicial.
 */
export const useForm = (initialForm = {}) => {

    /* Usamos el estado local para almacenar el estado del formulario. */
    const [formState, setFormState] = useState(initialForm);

    /**
     * Una función para manejar cambios en los campos del formulario.
     * @param {Event} target: El campo del formulario que ha cambiado.
     */
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };
    /**
     * Una función para restablecer el formulario a su estado inicial.
     */
    const onResetForm = () => {
        setFormState(initialForm);
    }

    /* Devolvemos el estado del formulario y la función de manejo de cambios y la función de restablecimiento. */
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
};