import {Col, Container, Form, FormCheck, FormSelect, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import FormCheckInput from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
function RegisterForm () {
    return (
        <div>
            <header>
                <center>
                    <nav>
                        <h1>Crea una cuenta nueva</h1>
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
                        <br/>
                        <Row>
                            <Form.Group>
                                <input class="form-control" type="text" placeholder="Número de teléfono"/>
                            </Form.Group>
                        </Row>
                        <br/>
                        <Row>
                            <Form.Group>
                                <input class="form-control" type="text" placeholder="Cotraseña"/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <p className="text-sm-left">Fecha de nacimiento</p>
                        </Row>
                        <Row>
                            <Col>
                            <FormSelect>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </FormSelect>
                            </Col>
                            <Col>
                                <FormSelect>
                                    <option>Enero</option>
                                    <option>Febrero</option>
                                    <option>Marzo</option>
                                    <option>Abril</option>
                                    <option>Mayo</option>
                                    <option>Junio</option>
                                    <option>Julio</option>
                                    <option>Agosto</option>
                                    <option>Septiembre</option>
                                    <option>Octubre</option>
                                    <option>Noviembre</option>
                                    <option>Diciembre</option>
                                </FormSelect>
                            </Col>
                            <Col>
                                <FormSelect>

                                    <option>2024</option>
                                    <option>2023</option>
                                    <option>1905</option>
                                    <option>1906</option>
                                </FormSelect>
                            </Col>
                        </Row>
                    <Row>
                        <Col>
                            <FormCheck>
                                <FormCheckLabel>Hombre</FormCheckLabel>
                                <FormCheckInput></FormCheckInput>
                            </FormCheck>

                        </Col>
                        <Col>
                            <FormCheck>
                                <FormCheckLabel>Mujer</FormCheckLabel>
                                <FormCheckInput></FormCheckInput>
                            </FormCheck>
                        </Col>
                        <Col>
                            <FormCheck>
                                <FormCheckLabel>Personalizado</FormCheckLabel>
                                <FormCheckInput></FormCheckInput>
                            </FormCheck>
                        </Col>

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

export default RegisterForm