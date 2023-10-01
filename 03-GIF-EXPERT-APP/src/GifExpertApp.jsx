import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dwight' ]);
    const [inputValue, setInputValue] = useState('');

    const onAddCategory = () => {
        if (inputValue.trim() !== '') {
            setCategories([inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <h1 className="text-center text-light">GifExpertApp</h1>
                    
                    {/* Input */}
                    <div className="d-flex">
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Nueva Categoria" className="form-control"/>
                        <Button className="btn-success" onClick={onAddCategory}>Agregar categoria</Button>
                    </div>
                    
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