import './component.css';
import {React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Button} from 'react-bootstrap';
import imagePath from '../assets/compass.png';
import {useNavigate} from "react-router-dom";
import Login from './modalLogin';
import Register from './modalRegister';


function Header(){
    const [showLogin, setShowLogin] = useState(false)
    const handleCloseLogin = () => { setShowLogin(false); };
    const handleShowLogin = () => { setShowLogin(true); };

    const [showRegister, setShowRegister] = useState(false)
    const handleCloseRegister = () => { setShowRegister(false); };
    const handleShowRegister = () => { setShowRegister(true); };

    const navigate = useNavigate();
    const HomeClick = () => {
        navigate('/');
    };

    function handleLogin(a) {
        console.log("Logged in", a);
      }


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
                            <Button variant="dark" type="submit" onClick={handleShowLogin}>Iniciar Sesión</Button>&nbsp;
                            <Button variant="outline-dark" onClick={handleShowRegister}>Registrarse</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Login show={showLogin} handleClose={handleCloseLogin} onSubmit={handleLogin}/>
                <Register show={showRegister} handleClose={handleCloseRegister}/>
            </div>
    )
}

//onSubmit={handleLogin}

export default Header

