import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export const CounterApp = ({ value }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>CounterApp</h1>
          <h2>{ value }</h2>
          <Button variant='primary'>Incrementar</Button>
        </Col>  
      </Row>
    </Container>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};