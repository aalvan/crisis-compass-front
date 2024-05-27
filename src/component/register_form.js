import {Col, Container, Form, Row} from "react-bootstrap";

function register_form () {
    return (
        <div>
            <header>
                <center>
                    <nav>
                        <h1>Formulario de Registro</h1>
                    </nav>
                </center>
            </header>
            <body>
            <Form>
                <section id="section">
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <input class="form-control" type="text" placeholder="Nombres"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <input class="form-control" type="text" placeholder="Apellidos"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <p className="text-sm-left">Fecha de nacimiento</p>
                        </Row>
                        <Row>
                            <Form.Group>
                                <label>Edad:</label>
                            </Form.Group>
                        </Row>
                        <Row>
                            <label>Genero:</label>
                        </Row>
                        <></>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <label>Correo:</label>
                                    <br/>
                                    <Form.Control id="email" type="email" placeholder="nombre@dominio.com
                                    "/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label>Contraseña:</label>
                                    <br/>
                                </Form.Group>
                                <Form.Control id="password" type="password"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Form>
            </body>
        </div>
    )
}

export default register_form