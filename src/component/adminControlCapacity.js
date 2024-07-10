import React, { useEffect, useState } from 'react';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageCheck from '../assets/check-mark.png';
import { Col, Container, ListGroup, Button, InputGroup, Form, FloatingLabel } from 'react-bootstrap';
import axios from "axios";

function ControlCapacity ({idLocation}) {
    const [shelter, setShelter] = useState()

    const [newIn, setNewIn] = useState(0)
    const [newOut, setNewOut] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:3001/api/shelterslocation/${idLocation}`).then(response => {
            const shelterData = {
                id: response.data.id,
                capacity: response.data.capacity,
                maxCapacity: response.data.capacity
            };
            setShelter(shelterData);
        })

            .catch(error => {
                console.error("There was an error fetching the locations!", error);
            });
    }, []);

    const plus = ({value}) => {
        let result;
        result = shelter.capacity + value;
        axios.put(`http://localhost:3001/api/shelter/${shelter.id}`, { capacity: result })
          .then(response => {
            console.log('Datos actualizados:', response.data);
          })
          .catch(error => {
            console.error('Hubo un error al actualizar los datos:', error);
          })
      }
    

    const substract = ({value}) => {
        let result;
        result = shelter.capacity - value;
        axios.put(`http://localhost:3001/api/shelter/${shelter.id}`, { capacity: result })
          .then(response => {
            console.log('Datos actualizados:', response.data);
          })
          .catch(error => {
            console.error('Hubo un error al actualizar los datos:', error);
          })
      }

    return(
        <>
        <div className='ControlCapacity'>
        <Container style={{marginTop:20}}>
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
                        <Col className="mt-2 justify-content-center" sm>Nombre</Col>
                        <Col className="mt-2 justify-content-center" sm>{shelter.maxCapacity}</Col>
                        <Col className="mt-2 justify-content-center" sm>{shelter.capacity}</Col>
                        <Col sm style={{marginRight:6}}>
                            <InputGroup className="mb-1">
                                <Form.Control
                                placeholder="0"
                                aria-label="cantidad"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewIn(event.target.value)}
                                />
                                <Button variant="light" id="button-addon2">
                                    <img 
                                        src={imageCheck} 
                                        width="20" 
                                        height="20" 
                                        alt="Check"
                                        onClick={plus}/>
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col sm>
                            <InputGroup className="mb-1">
                                <Form.Control
                                placeholder="0"
                                aria-label="cantidad"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewOut(event.target.value)}
                                />
                                <Button variant="light" id="button-addon2">
                                    <img 
                                        src={imageCheck} 
                                        width="20" 
                                        height="20" 
                                        alt="Check"
                                        onClick={substract}/>
                                </Button>
                            </InputGroup>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
        </>
    )
}

export default ControlCapacity