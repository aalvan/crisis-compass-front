import React, { useEffect, useState } from 'react';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { functionTypeAnnotation } from '@babel/types';
import imageCheck from '../assets/check-mark.png';
import imageError from '../assets/traffic-signal.png';
import { Col, Container, ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

function ControlLocation({id}) {
    //const items = [
    //    {id: 1, name: 'Susana Susanita', location_id: "Locacion1", assign: false},
    //    {id: 2, name: 'Alan Brito', location_id: "Locacion2", assign: false},
    //    {id: 3, name: 'Javier Bustamantes', location_id: "Locacion1", assign: false}
    //  ];

    const [users, setUsers] = useState([]);

      useEffect(() => {
        // Fetch user data from the API
        axios.get(`http://localhost:3001/api/userslocation/${id}`).then(response => {

            const userData = response.data.map(loc => ({
                id: loc.id,
                name: loc.name,
                mail: loc.mail,
                phone: loc.phone
            }));
          setUsers(userData);
        }).catch(error => {
          console.error("There was an error fetching the user data!", error);
        });
      }, [id]);


    return(
        <>
        <div className='ControlLocation'>
            <Container style={{marginTop:20}}>
                <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <ListGroup.Item
                        variant='light' 
                        as="li" 
                        className="d-flex justify-content-between">
                        <Col xs={5}>Voluntario</Col>
                        <Col xs={5}>Contacto</Col>
                        <Col xs={2}>Asignación</Col>
                    </ListGroup.Item>
                    {users.map((item) => (
                    <ListGroup.Item 
                        key={item.id} 
                        variant='light' 
                        as="li" 
                        className="d-flex justify-content-between align-items-start">
                        <Col xs={5}>{item.name}</Col>
                        <Col xs={5}>{item.phone}</Col>
                        <Col xs={2}>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="light">
                                    <img 
                                        src={imageCheck} 
                                        width="20" 
                                        height="20" 
                                        alt="check"/>
                                </Button>
                                <Button variant="light">
                                    <img 
                                        src={imageError} 
                                        width="20" 
                                        height="20" 
                                        alt="Rejected"/>
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
        </>
    )
}

export default ControlLocation
