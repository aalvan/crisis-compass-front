import {Col, Container, Form, FormCheck, FormSelect, Row, Card, Button} from "react-bootstrap";
import Header from '../component/header';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormCheckInput from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import {useNavigate} from "react-router-dom";
import DatePicker, {getYear, getMonth, range}  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.module.css";


function RegisterForm () {
    const [startDate, setStartDate] = useState(new Date("2000","0","1"));

    const navigate = useNavigate();
    
    const volunteersClick = () => {
        navigate('/volunteers');
    };

    return (
        <div>
            <Header/>
            <body>
            <br/>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div style={{top:'50%'}}>
                        <Card style={{ width: '40rem'}}>
                            <Card.Header className="text-center">Registro</Card.Header>
                            <Card.Body>
                            <Form>
                                <Container>
                                    <Row>
                                        <Form.Group>
                                            <input class="form-control" type="text" placeholder="Nombres"/>
                                        </Form.Group>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Form.Group>
                                            <input class="form-control" type="text" placeholder="Apellidos"/>
                                        </Form.Group>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Form.Group>
                                            <input class="form-control" type="text" placeholder="Número de teléfono"/>
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
                                        <Form.Control id="email" type="email" placeholder="Correo ej: nombre@dominio.com"/>
                                        </Form.Group>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Form.Group>
                                        <Form.Control id="password" type="password" placeholder="Contraseña"/>
                                        </Form.Group>
                                    </Row>
                                    <br/>
                                    <Row className="justify-content-center">
                                    <Col md="auto">
                                        <Button 
                                            variant="dark" 
                                            size="md" 
                                            onClick={volunteersClick} 
                                            style={{backgroundColor: "#BF5050", }}
                                            >Crear Cuenta
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                                </Container>
                            </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            </body>
        </div>
    )
}

export default RegisterForm