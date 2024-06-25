import './component.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import imagePath from '../assets/compass.png';
import {useNavigate} from "react-router-dom";


function Header(){
    const navigate = useNavigate();

    const HomeClick = () => {
        navigate('/');
    };

    const RegisterClick = () => {
        navigate('/register-form');
    };

    const LoginClick = () => {
        navigate('/login'); // Assuming you have a login route
    };

    return(
        <div className="Header"> 
            <Navbar className="Header">
                <Container>
                    <Navbar.Brand onClick={HomeClick} className="justify-content-start">
                        <img
                        src={imagePath}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Crisis Compass logo"
                        />{' '}
                        Crisis Compass
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="dark" onClick={LoginClick}>Iniciar Sesión</Button>&nbsp;
                        <Button variant="outline-dark" onClick={RegisterClick}>Registrarse</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header

