import {Col, Form, Button, Row, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import FormCheckInput from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import {useNavigate} from "react-router-dom";
import Header from '../component/header';

function Login () {
    const navigate = useNavigate();

    const volunteersClick = () => {
        navigate('/volunteers');
    };
    const RegisterClick = () => {
        navigate('/register-form');
    };

    return (
        <div>
            <Header/>
            <body>
            <br/>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '25rem' }}>
                        <Card.Header className="text-center">Iniciar Sesión</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <label>Correo:</label>
                                    <br/>
                                    <Form.Control id="email" type="email" placeholder="nombre@dominio.com"/>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <label>Contraseña:</label>
                                    <br/>
                                    <Form.Control id="password" type="password"/>
                                </Form.Group>
                                <br/>
                            </Form>
                            <Row className="justify-content-center">
                                <Col md="auto">
                                    <Button 
                                        variant="dark" 
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
                                        onClick={RegisterClick}
                                        style={{color: "black", backgroundColor: "white", border: "none"}}
                                        >
                                        <label>¿No tienes cuenta? Registrate</label>
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </body>
        </div>
    )
}

export default Login