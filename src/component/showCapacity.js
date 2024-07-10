import React, { useEffect, useState } from 'react';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, ListGroup, Button, InputGroup, Form } from 'react-bootstrap';
import axios from "axios";

function ShowCapacity({ idLocation }) {
  const [shelter, setShelter] = useState({});
  //<ControlCapacity idLocation={location.id}/>

  useEffect(() => {
    axios.get(`http://localhost:3001/api/shelterslocation/${idLocation}`)
      .then(response => {
        const shelterData = {
          id: response.data.id,
          capacity: response.data.capacity,
          maxCapacity: response.data.maxCapacity
        };
        setShelter(shelterData);
      })
      .catch(error => {
        console.error("There was an error fetching the locations!", error);
      });
  }, [idLocation]);

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
          </ListGroup.Item>
          <ListGroup.Item
            variant='light'
            as="li"
            className="d-flex justify-content-between align-items-start">
            <Col className="mt-2 justify-content-center" sm>Nombre</Col>
            <Col className="mt-2 justify-content-center" sm>{shelter.maxCapacity}</Col>
            <Col className="mt-2 justify-content-center" sm>{shelter.capacity}</Col>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  )
}

export default ShowCapacity;