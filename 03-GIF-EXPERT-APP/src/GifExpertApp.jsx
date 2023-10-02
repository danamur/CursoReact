import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react'
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dwight']);

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
                    <h1 className="text-center text-light mb-4 display-4 fw-bold">GifExpertApp</h1>

                    {/* Input */}
                    <AddCategory onAddCategory={onAddCategory} />

                    {/* Listado de Gif */}
                    {categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};