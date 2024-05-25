import { useState } from 'react'
import { Form, Row, Col, Button, Container, Dropdown, DropdownButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function MainPage () {
    const [email, setEmail] = useState('test_email')
    const [password, setPassword] = useState('test_password')
    const items = Array.from({ length: 20 }, (_, index) => `Elemento ${index + 1}`);
    const showMessage = () => {
        alert(`El email ingresado es ${email} y el password es ${password}`)
    }

    return (
        <div style={{marginTop:0}}>
            <Form>
                <section id="section">
                    <Container>
                        <Row style={{height: "50px", backgroundColor: 'grey'}}> {/* Linea de incio de sesión y registro */}
                            <Col className="text-end">
                                <Button 
                                    type='button'
                                    size='lg'
                                    onClick={showMessage}
                                    style={{backgroundColor:"grey", textTransform:"uppercase", border: "none" }}
                                >
                                    <label>Iniciar Sesión</label>
                                </Button>
                                <Button 
                                    type='button'
                                    size='lg'
                                    onClick={showMessage}
                                    style={{backgroundColor:"grey", textTransform:"uppercase", border: "none" }}
                                >
                                    <label>Registrarse</label>
                                </Button>
                            </Col>
                        </Row>
                        <div style={{maxWidth:'60%'}}> 
                            <Row style={{marginTop:50, textAlign:'left'}}>
                                <Col> {/* Busqueda para establecer ubicación*/}
                                    <Form.Group>
                                        <label>Establecer Ubicación:</label>
                                        <br />
                                        <Form.Control id="email" type="email" onChange={(component) => setEmail(component.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{marginTop:30, textAlign:'left'}}>
                                <Col> {/* Lista scroll*/}
                                <label>Seleccionar ubicación:</label>
                                <Form.Group
                                    className="list-group"
                                    style={{ maxHeight: '200px', overflowY: 'scroll' }} 
                                >
                                    {items.map((item, index) => (
                                    <a key={index} className="list-group-item list-group-item-action">
                                        {item}
                                    </a>
                                    ))}
                                </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </Form>
        </div>
    )
}

export default MainPage