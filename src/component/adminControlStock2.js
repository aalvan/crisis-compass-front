import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageCheck from '../assets/check-mark.png';
import { Col, Container, ListGroup, Button, InputGroup, Form } from 'react-bootstrap';

function ControlStock({ idLocation }) {
    const [collectionCenters, setCollectionCenters] = useState({});
    const [ccItems, setCcItems] = useState([]);
    const [newIn, setNewIn] = useState(0);
    const [newOut, setNewOut] = useState(0);
    const [newProduct, setNewProduct] = useState('');
    const [newType, setNewType] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/collectioncenterlocation/${idLocation}`)
            .then(response => {
                const collectionCenterData = {
                    id: response.data.id,
                    name: response.data.name,
                };
                setCollectionCenters(collectionCenterData);
            })
            .catch(error => {
                console.error("There was an error fetching the locations!", error);
            });
    }, [idLocation]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/collectioncentersitemlocation/${idLocation}`)
            .then(response => {
                const ccItemsData = response.data.map(loc => ({
                    id: loc.id,
                    itemId: loc.itemId,
                    stock: loc.stock
                }));
                setCcItems(ccItemsData);
            })
            .catch(error => {
                console.error("There was an error fetching the items data!", error);
            });
    }, [idLocation]);

    const updateCapacity = (itemId, value) => {
        const item = ccItems.find(item => item.id === itemId);
        let newCapacity = item.stock + value;
        if (newCapacity < 0) newCapacity = 0; // Evita que la capacidad sea negativa

        axios.put(`http://localhost:3001/api/shelter/${itemId}`, { stock: newCapacity })
            .then(response => {
                console.log('Datos actualizados:', response.data);
                setCcItems(prevItems => prevItems.map(i => 
                    i.id === itemId ? { ...i, stock: newCapacity } : i
                ));
            })
            .catch(error => {
                console.error('Hubo un error al actualizar los datos:', error);
            });
        setNewIn(0);
        setNewOut(0);
    }

    const append = () => {
        const newItem = {
            name: newProduct,
            type: newType,
            quantity: newQuantity
        };
        axios.post(`http://localhost:3001/api/collectioncenteritem`, newItem)
            .then(response => {
                setCcItems([...ccItems, response.data]);
                setNewProduct('');
                setNewType('');
                setNewQuantity(0);
            })
            .catch(error => {
                console.error("There was an error adding the item!", error);
            });
    }

    const getNameItem = (itemId) => {
        const item = ccItems.find(item => item.id === itemId);
        return item ? item.name : 'Unknown';
    }

    const plus = (itemId) => updateCapacity(itemId, parseInt(newIn));
    const subtract = (itemId) => updateCapacity(itemId, -parseInt(newOut));

    return (
        <div className='ControlStock'>
            <Container style={{ marginTop: 20 }}>
                <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <ListGroup.Item variant='light' as="li" className="d-flex justify-content-md-center">
                        <Col className="justify-content-center" sm>Producto</Col>
                        <Col className="justify-content-center" sm>Tipo</Col>
                        <Col className="justify-content-center" sm>Cantidad</Col>
                        <Col className="justify-content-center" sm>Entrada</Col>
                        <Col className="justify-content-center" sm>Salida</Col>
                    </ListGroup.Item>
                    {ccItems.map((item) => (
                        <ListGroup.Item
                            key={item.id}
                            variant='light'
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <Col className="mt-2 justify-content-center" sm>{getNameItem(item.id)}</Col>
                            <Col className="mt-2 justify-content-center" sm>{item.type}</Col>
                            <Col className="mt-2 justify-content-center" sm>{item.quantity}</Col>
                            <Col sm style={{ marginRight: 6 }}>
                                <InputGroup className="mb-1">
                                    <Form.Control
                                        placeholder="0"
                                        aria-label="cantidad"
                                        aria-describedby="basic-addon2"
                                        onChange={(event) => setNewIn(event.target.value)}
                                    />
                                    <Button variant="light" id="button-addon2" onClick={() => plus(item.id)}>
                                        <img
                                            src={imageCheck}
                                            width="20"
                                            height="20"
                                            alt="Check"
                                        />
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
                                    <Button variant="light" id="button-addon2" onClick={() => subtract(item.id)}>
                                        <img
                                            src={imageCheck}
                                            width="20"
                                            height="20"
                                            alt="Check"
                                        />
                                    </Button>
                                </InputGroup>
                            </Col>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
            <Container style={{ marginTop: 20 }}>
                <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <ListGroup.Item
                        variant='light'
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <Col className="mt-2 justify-content-center" sm={3} style={{ marginRight: 10, marginBottom: 9 }}>
                            <Form.Control
                                placeholder="Producto"
                                aria-label="product"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewProduct(event.target.value)}
                                value={newProduct}
                            />
                        </Col>
                        <Col className="mt-2 justify-content-center" sm={3} style={{ marginRight: 10, marginBottom: 9 }}>
                            <Form.Select onChange={(event) => setNewType(event.target.value)} value={newType}>
                                <option>Tipo</option>
                                <option value="Comida">Comida</option>
                                <option value="Aseo">Art. Aseo</option>
                                <option value="Limpieza">Limpieza</option>
                                <option value="Mueble">Mueble</option>
                                <option value="Ropa">Ropa</option>
                            </Form.Select>
                        </Col>
                        <Col className="mt-2 justify-content-center" sm={3} style={{ marginRight: 10, marginBottom: 9 }}>
                            <Form.Control
                                placeholder="0"
                                aria-label="quantity"
                                aria-describedby="basic-addon2"
                                onChange={(event) => setNewQuantity(event.target.value)}
                                value={newQuantity}
                            />
                        </Col>
                        <Col className="mt-2 justify-content-end" sm={2} style={{ marginLeft: 30, marginBottom: 9 }}>
                            <Button variant="light" id="button-addon2" onClick={append}>
                                Ingresar
                            </Button>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
    );
}

export default ControlStock;