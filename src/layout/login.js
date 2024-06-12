import {Col, Container, Form, Button, FormSelect, Row} from "react-bootstrap";
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
            <header>
            <Header/>
            </header>
            <body>
            <Form>
                <section id="section">
                    <Container>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Form.Group>
                                <label>Correo:</label>
                                <br/>
                                <Form.Control id="email" type="email" placeholder="nombre@dominio.com"/>
                                </Form.Group>
                            </Col>
                            <Col></Col>
                        </Row>
                    <br/>
                    <Row>
                    <Col></Col>
                        <Col>
                            <Form.Group>
                                <label>Contraseña:</label>
                                <br/>
                                </Form.Group>
                            <Form.Control id="password" type="password"/>
                        </Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col></Col>
                    <Col>
                    <div class="d-flex justify-content-center">
                    <Button
                            type='button'
                            size='md'
                            onClick={volunteersClick}
                            style={{backgroundColor: "grey", textTransform: "uppercase", border: "none",}}
                            >
                            <label>Iniciar Sesión</label>
                            </Button>
                    </div>
                    </Col>
                            <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col></Col>
                    <Col>
                    <div class="d-flex justify-content-center">
                    <Button
                            type='button'
                            size='sm'
                            onClick={RegisterClick}
                            style={{color: "black", backgroundColor: "white", textTransform: "uppercase", border: "none"}}
                            >
                            <label>¿No tienes cuenta? Registrate</label>
                            </Button>
                            </div>
                    </Col>
                            <Col></Col>
                    </Row>
                    </Container>
                </section>
            </Form>
            </body>
        </div>
    )
}

export default Login