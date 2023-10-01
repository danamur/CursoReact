import { useState } from "react";
import { Button } from "react-bootstrap"

export const AddCategory = ({ onAddCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = ({key}) => {
        if (key === "Enter" && inputValue.trim() !== '') {
            // Llama a la función onAddCategory para agregar una nueva categoría
            onAddCategory(inputValue);
            setInputValue('');
        }
    }

    const onInputChage = ({target}) => {
        setInputValue(target.value);
    }

    return (
        <>
            <div className="d-flex">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={onInputChage}
                  onKeyUp={handleKeyPress}
                  placeholder="Nueva Categoria"
                  className="form-control"
                />
            </div>
        </>
    )
}
