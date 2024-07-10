import React, { useEffect, useState } from 'react';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageCheck from '../assets/check-mark.png';
import { Col, Container, ListGroup, Button, InputGroup, Form, FloatingLabel } from 'react-bootstrap';

function ControlStock() {
    const items = [
        {id: 1, name: 'Arroz', type: "Comida", quantity: 20},
        {id: 2, name: 'Colchón', type: "Mueble", quantity: 5},
        {id: 3, name: 'Pantalón', type: "Ropa", quantity: 10}
      ];
    const [newIn, setNewIn] = useState(0)
    const [newOut, setNewOut] = useState(0)

    const [newProduct, setNewProduct] = useState('')
    const [newType, setNewType] = useState('')
    const [newQuantity, setNewQuantity] = useState(0)

    const plus = ({value}) => {
        let result;
        let quantity;
        result = quantity + value;
    }

    const substract = ({value}) => {
        let result;
        let quantity;
        result = quantity - value;
    }

    const append = ({}) => {
        //POST del nuevo producto
    }
    
    return(
        <>
        <div className='ControlStrock'>
        <Container style={{marginTop:20}}>
                <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <ListGroup.Item
                        variant='light' 
                        as="li" 
                        className="d-flex justify-content-md-center">
                        <Col className="justify-content-center" sm>Producto</Col>
                        <Col className="justify-content-center" sm>Tipo</Col>
                        <Col className="justify-content-center" sm>Cantidad</Col>
                        <Col className="justify-content-center" sm>Entrada</Col>
                        <Col className="justify-content-center" sm>Salida</Col>
                    </ListGroup.Item>
                    {items.map((item) => (
                    <ListGroup.Item 
                        key={item.id} 
                        variant='light' 
                        as="li" 
                        className="d-flex justify-content-between align-items-start">
                        <Col className="mt-2 justify-content-center" sm>{item.name}</Col>
                        <Col className="mt-2 justify-content-center" sm>{item.type}</Col>
                        <Col className="mt-2 justify-content-center" sm>{item.quantity}</Col>
                        <Col sm style={{marginRight:6}}>
                            <InputGroup className="mb-1">
                                <Form.Control
                                placeholder="0"
                                aria-label="cantidad"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewIn(event.target.value)}
                                />
                                <Button variant="light" id="button-addon2">
                                    <img 
                                        src={imageCheck} 
                                        width="20" 
                                        height="20" 
                                        alt="Check"
                                        onClick={plus}/>
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col sm>
                            <InputGroup className="mb-1">
                                <Form.Control
                                placeholder="0"
                                aria-label="cantidad"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewOut(event.target.value)}
                                />
                                <Button variant="light" id="button-addon2">
                                    <img 
                                        src={imageCheck} 
                                        width="20" 
                                        height="20" 
                                        alt="Check"
                                        onClick={substract}/>
                                </Button>
                            </InputGroup>
                        </Col>
                    </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
            <Container style={{marginTop:20, marginLeft:40}}>
                <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <ListGroup.Item 
                        variant='light' 
                        as="li" 
                        className="d-flex justify-content-between align-items-start">
                        <Col className="mt-2 justify-content-center" sm={3} style={{marginRight:10, marginBottom:9}}>
                            <Form.Control
                                placeholder="Producto"
                                aria-label="product"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewProduct(event.target.value)}
                            /></Col>
                        <Col className="mt-2 justify-content-center" sm={3} style={{marginRight:10, marginBottom:9}}>
                                <Form.Select onChange={(event) => setNewType(event.target.value)} >
                                    <option>Tipo</option>
                                    <option value="Comida">Comida</option>
                                    <option value="Aseo">Art. Aseo</option>
                                    <option value="Limpieza">Limpieza</option>
                                    <option value="Mueble">Mueble</option>
                                    <option value="Ropa">Ropa</option>
                                </Form.Select></Col>
                        <Col className="mt-2 justify-content-center" sm={3} style={{marginRight:10, marginBottom:9}} >
                            <Form.Control
                                placeholder="0"
                                aria-label="quantity"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewQuantity(event.target.value)}
                            /></Col>
                        <Col className="mt-2 justify-content-end" sm={2} style={{marginLeft:30, marginBottom:9}} >
                                <Button variant="light" id="button-addon2" onClick={append}>
                                    Ingresar
                                </Button></Col>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
        </>
    )
}

export default ControlStock