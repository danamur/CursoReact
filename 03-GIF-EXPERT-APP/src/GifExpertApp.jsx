import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react'
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dwight' ]);

    // Función para agregar una nueva categoría
    const onAddCategory = (newCategory) => {
        // Convierte la primera letra en mayúscula y el resto en minúscula
        const formattedCategory = newCategory.charAt(0).toUpperCase() + newCategory.slice(1).toLowerCase();

        // Convierte todo a minúsculas antes de hacer la comparación
        const lowercaseCategories = categories.map((category) => category.toLowerCase());
        const lowercaseNewCategory = formattedCategory.toLowerCase();

        if (lowercaseCategories.includes(lowercaseNewCategory)) return;

        setCategories([formattedCategory, ...categories]);
    }

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <h1 className="text-center text-light">GifExpertApp</h1>
                    
                    {/* Input */}
                    <AddCategory onAddCategory={onAddCategory}/>
                    
                    {/* Listado de Gif */}
                    <ol>
                        { 
                            categories.map((category) => {
                                return <li key={category} className="text-light">{category}</li>;
                            })
                        }
                    </ol>
                </Col>
            </Row>
        </Container>
    );
};