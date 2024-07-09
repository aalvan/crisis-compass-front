import React, { useState, useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Col, Form, Button, Row, Modal, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './modalRegister';
import PropTypes from "prop-types";
import axios from "axios";
import { UserContext } from './UserContext';

function Login({show, handleClose, onSubmit}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const userTest = {
        email: email,
        password: password,
    };

    const hideGroup = document.getElementById('login');
    const init = () =>{
    }

    const [showRegister, setShowRegister] = useState(false)
    const handleCloseRegister = () => { setShowRegister(false); };
    const handleShowRegister = () => { 
      handleClose(false);
      setShowRegister(true);
     };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setEmail('');
      setPassword('');
      setSuccess(true);
    };

    const navigate = useNavigate();
    const volunteersClick = async () => {
        try{
            const response = await axios.post('http://localhost:3001/api/user/check',userTest)
            setSuccess(true)
            console.log(response)
            setUser(response.data.user);
        }
        catch{
            setErrorMsg('El inicio de sesión ha fallado')

        }
      if(response.data.user){
        handleClose()
        navigate('/volunteers')
      } else {
        alert(`Correo o contraseña no válido`);
      }

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
                            autoComplete='off'
                            placeholder="nombre@dominio.com" 
                            onChange={(event) => setEmail(event.target.value)} 
                            value={email}
                            required
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
                            value={password}
                            required
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
                                id='login'
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
  
  //<p className={errorMsg ? "errorMsg" : "offscreen"} aria-live='assertive'>{errorMsg}</p>
  export default Login;