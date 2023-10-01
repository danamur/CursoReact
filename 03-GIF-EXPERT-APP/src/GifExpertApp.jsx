import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react'
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dwight' ]);

    // Función para agregar una nueva categoría
    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
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
                            categories.map((category, index) => {
                                return <li key={index + category} className="text-light">{category}</li>;
                            })
                        }
                    </ol>
                </Col>
            </Row>
        </Container>
    );
};