import { useState } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export const CounterApp = ({ value }) => {

  /** Utilizamos una constante para asignar el valor del hook para evitar errores al setear los valores */
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    if (counter > 0) {
      setCounter (counter - 1);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">CounterApp</h1>
          <h2 className="text-center">{counter}</h2>
          <div className="d-flex justify-content-center">
            <Button variant='danger' onClick={handleSubtract} className="mx-2">Decrementar</Button>
            <Button variant='primary' onClick={handleAdd} className="mx-2">Incrementar</Button>
          </div>
        </Col>  
      </Row>
    </Container>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};