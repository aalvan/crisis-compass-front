import React, { useEffect, useState } from 'react';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageCheck from '../assets/check-mark.png';
import { Col, Container, ListGroup, Button, InputGroup, Form } from 'react-bootstrap';
import axios from "axios";

function ControlCapacity({ idLocation }) {
  const [shelter, setShelter] = useState({});
  const [newIn, setNewIn] = useState(0);
  const [newOut, setNewOut] = useState(0);
  //<ControlCapacity idLocation={location.id}/>

  useEffect(() => {
    axios.get(`http://localhost:3001/api/shelterslocation/${idLocation}`)
      .then(response => {
        const shelterData = {
          id: response.data.id,
          name:response.data.name,
          capacity: response.data.capacity,
          maxCapacity: response.data.maxCapacity
        };
        console.log(shelterData)
        setShelter(shelterData);
      })
      .catch(error => {
        console.error("There was an error fetching the locations!", error);
      });
  }, [idLocation]);


  const updateCapacity = (value) => {
    let newCapacity = shelter.capacity + value;
    if (newCapacity < 0) newCapacity = 0; // Evita que la capacidad sea negativa

    axios.put(`http://localhost:3001/api/shelter/${shelter.id}`, { capacity: newCapacity })
      .then(response => {
        console.log('Datos actualizados:', response.data);
        setShelter({ ...shelter, capacity: newCapacity });
      })
      .catch(error => {
        console.error('Hubo un error al actualizar los datos:', error);
      });
  }

  return (
    <div className='ControlCapacity'>
      <Container style={{ marginTop: 20 }}>
        <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' }}>
          <ListGroup.Item
            variant='light'
            as="li"
            className="d-flex justify-content-md-center">
            <Col className="justify-content-center" sm>Albergue</Col>
            <Col className="justify-content-center" sm>Capacidad Máxima</Col>
            <Col className="justify-content-center" sm>Capacidad Actual</Col>
            <Col className="justify-content-center" sm>Entrada</Col>
            <Col className="justify-content-center" sm>Salida</Col>
          </ListGroup.Item>
          <ListGroup.Item
            variant='light'
            as="li"
            className="d-flex justify-content-between align-items-start">
            <Col className="mt-2 justify-content-center" sm>{shelter.name}</Col>
            <Col className="mt-2 justify-content-center" sm>{shelter.maxCapacity}</Col>
            <Col className="mt-2 justify-content-center" sm>{shelter.capacity}</Col>
            <Col sm style={{ marginRight: 6 }}>
              <InputGroup className="mb-1">
                <Form.Control
                  placeholder="0"
                  aria-label="cantidad"
                  aria-describedby="basic-addon2"
                  onChange={(event) => setNewIn(Number(event.target.value))}
                />
                <Button variant="light" id="button-addon2" onClick={() => updateCapacity(newIn)}>
                  <img
                    src={imageCheck}
                    width="20"
                    height="20"
                    alt="Check"
                  />
                </Button>
              </InputGroup>
            </Col>
            <Col sm>
              <InputGroup className="mb-1">
                <Form.Control
                  placeholder="0"
                  aria-label="cantidad"
                  aria-describedby="basic-addon2"
                  onChange={(event) => setNewOut(Number(event.target.value))}
                />
                <Button variant="light" id="button-addon2" onClick={() => updateCapacity(-newOut)}>
                  <img
                    src={imageCheck}
                    width="20"
                    height="20"
                    alt="Check"
                  />
                </Button>
              </InputGroup>
            </Col>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  )
}

export default ControlCapacity;