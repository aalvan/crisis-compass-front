import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Form, Row, Modal, Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.module.css";
import DatePicker  from 'react-datepicker';
import axios from "axios"; //npm install react-datepicker --save


function Register({show, handleClose}) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const completeName = name + ' ' + lastname;
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [startDate, setStartDate] = useState(new Date("2000", "0", "1"));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [assignedLocationId, setAssignedLocationId] = useState('');
    const [userType, setUserType] = useState('');

    const navigate = useNavigate();

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCreateAccount = async () => {
        const user = {
            completeName,
            address,
            phone: number,
            birthday: startDate,
            genre: gender,
            assigned_location_id: 1,
            user_type: false,
            mail: email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3001/api/user', user);
            console.log('User created:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
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
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombres"
                                        onChange={(component) => setName(component.target.value)} />
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Apellidos"
                                        onChange={(component) => setLastname(component.target.value)} />
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Dirección"
                                        onChange={(component) => setAddress(component.target.value)} />
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Número de teléfono"
                                        onChange={(component) => setNumber(component.target.value)} />
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={4}>
                                    <p className="text-sm-left">Fecha de nacimiento</p>
                                </Col>
                                <Col xs={4}>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={3}>
                                    <Form.Check
                                        inline
                                        label="Hombre"
                                        name="group1"
                                        type="radio"
                                        id="man"
                                        value="Hombre"
                                        onChange={handleGenderChange}
                                    />
                                </Col>
                                <Col xs={3}>
                                    <Form.Check
                                        inline
                                        label="Mujer"
                                        name="group1"
                                        type="radio"
                                        id="woman"
                                        value="Mujer"
                                        onChange={handleGenderChange}
                                    />
                                </Col>
                                <Col xs={5}>
                                    <Form.Check
                                        inline
                                        label="Prefiero no responder"
                                        name="group1"
                                        type="radio"
                                        id="customize"
                                        value="Prefiero no responder"
                                        onChange={handleGenderChange}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group>
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        placeholder="Correo ej: nombre@dominio.com"
                                        onChange={(component) => setEmail(component.target.value)} />
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group>
                                    <Form.Control
                                        id="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        onChange={(component) => setPassword(component.target.value)} />
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
                            onClick={handleCreateAccount}
                            style={{ backgroundColor: "#BF5050", }}
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