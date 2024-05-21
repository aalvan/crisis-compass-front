import { useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

function FormComponent () {
    const [email, setEmail] = useState('test_email')
    const [password, setPassword] = useState('test_password')
    const showMessage = () => {
        alert(`El email ingresado es ${email} y el password es ${password}`)
    }

    return (
        <div style={{marginTop:100}}>
            <Form>
                <section id="section">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className='home-title'>Ejemplo de formulario simple</h2>
                            </Col>
                        </Row>
                        <div style={{maxWidth:'60%'}}>
                            <Row style={{marginTop:50, textAlign:'left'}}>
                                <Col>
                                    <Form.Group>
                                        <label>E-MAIL:</label>
                                        <br />
                                        <Form.Control id="email" type="email" onChange={(component) => setEmail(component.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{marginTop:30, textAlign:'left'}}>
                                <Col>
                                    <Form.Group>
                                        <label>PASSWORD:</label>
                                        <br />
                                        <Form.Control id="password" type='password' onChange={(component) => setPassword(component.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <Button 
                                    type='button'
                                    size='lg'
                                    onClick={showMessage}
                                    style={{backgroundColor:"green", borderColor:"black", textTransform:"uppercase", marginTop:50}}
                                >
                                    <label>Ingresar</label>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label style={{marginTop:50}}>{email}</label>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Form>
        </div>
    )
}

export default FormComponent