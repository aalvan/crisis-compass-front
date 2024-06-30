import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Form, Row, Modal, Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.module.css";
import DatePicker  from 'react-datepicker'; //npm install react-datepicker --save


function Register({show, handleClose}) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [number, setNumber] = useState('');
    const [startDate, setStartDate] = useState(new Date("2000","0","1"));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const volunteersClick = () => {
      navigate('/volunteers');
    };

    return (
      <>
        <Modal show={show} onHide={handleClose} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
          <Modal.Header closeButton>
            <Modal.Title>Crear Cuenta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Container>
                  <Row>
                      <Form.Group>
                          <input 
                              class="form-control" 
                              type="text" 
                              placeholder="Nombres"
                              onChange={(component) => setName(component.target.value)}/>
                      </Form.Group>
                  </Row>
                  <br/>
                  <Row>
                      <Form.Group>
                          <input 
                              class="form-control" 
                              type="text" 
                              placeholder="Apellidos"
                              onChange={(component) => setLastname(component.target.value)}/>
                      </Form.Group>
                  </Row>
                  <br/>
                  <Row>
                      <Form.Group>
                          <input 
                              class="form-control" 
                              type="text" 
                              placeholder="Número de teléfono"
                              onChange={(component) => setNumber(component.target.value)}/>
                      </Form.Group>
                  </Row>
                  <br/>
                  <Row>
                      <Col xs={4}>
                          <p className="text-sm-left">Fecha de nacimiento</p>
                      </Col>
                      <Col xs={4}>
                          <DatePicker DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col xs={3}>
                        <Form.Check
                        inline
                        label="Hombre"
                        name="group1"
                        type="radio"
                        id="man"
                        />
                    </Col>
                    <Col xs={3}>
                        <Form.Check
                        inline
                        label="Mujer"
                        name="group1"
                        type="radio"
                        id="woman"
                        />
                    </Col>
                    <Col xs={5}>
                        <Form.Check
                        inline
                        label="Prefiero no responder"
                        name="group1"
                        type="radio"
                        id="customize"
                        />
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                      <Form.Group>
                      <Form.Control 
                            id="email"
                            type="email"
                            placeholder="Correo ej: nombre@dominio.com"
                            onChange={(component) => setEmail(component.target.value)}/>
                      </Form.Group>
                  </Row>
                  <br/>
                  <Row>
                      <Form.Group>
                      <Form.Control
                            id="password" 
                            type="password" 
                            placeholder="Contraseña"
                            onChange={(component) => setPassword(component.target.value)}/>
                      </Form.Group>
                  </Row>
              </Container>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Col md="auto">
                <Button 
                    variant="dark" 
                    size="md" 
                    onClick={volunteersClick} 
                    style={{backgroundColor: "#BF5050", }}
                    >Crear Cuenta
                </Button>
            </Col>
            <Col md="auto">
                <Button 
                    variant="dark" 
                    size="md" 
                    onClick={handleClose} 
                    >Salir
                </Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  
  export default Register;