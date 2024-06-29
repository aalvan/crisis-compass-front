import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Col, Form, Button, Row, Modal, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './modalRegister';
import PropTypes from "prop-types";

function Login({show, handleClose, onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showRegister, setShowRegister] = useState(false)
    const handleCloseRegister = () => { setShowRegister(false); };
    const handleShowRegister = () => { 
      handleClose(false);
      setShowRegister(true);
     };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ email, password });
    };

    const navigate = useNavigate();
    const volunteersClick = () => {
      navigate('/volunteers');
    };

    return (
      <>
        <Modal show={show} onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form onSubmit={handleSubmit} data-testid="loginForm"> 
                    <Form.Group>
                        <label>Correo:</label>
                        <br/>
                        <Form.Control 
                            id="email" 
                            name="email"
                            type="email" 
                            placeholder="nombre@dominio.com" 
                            onChange={(event) => setEmail(event.target.value)} 
                            data-testid="loginForm-email" />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <label>Contraseña:</label>
                        <br/>
                        <Form.Control 
                            id="password" 
                            name="password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)} 
                            data-testid="loginForm-password"/>
                    </Form.Group>
                    <br/>
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Container>
                <Row className="justify-content-center">
                        <Col md="auto">
                            <Button 
                                type="submit"
                                variant="dark"
                                name="init" 
                                size="md" 
                                onClick={volunteersClick}  
                                style={{backgroundColor: "#BF5050", }}
                                >Iniciar Sesión
                            </Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Button
                                type='button'
                                size='sm'
                                onClick={handleShowRegister}
                                style={{color: "black", backgroundColor: "white", border: "none"}}
                                >
                                <label>¿No tienes cuenta? Registrate</label>
                            </Button>
                        </Col>
                    </Row>
              </Container>
          </Modal.Footer>
        </Modal>
        <Register show={showRegister} handleClose={handleCloseRegister}/>
      </>
    );
  }

  Login.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  
  export default Login;