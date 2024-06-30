import { useState } from 'react'
import { Form, Row, Col, Container, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagePath from '../assets/V.jpg';
import Map from './map';

function MainPage () {
    const [location, setLocation] = useState('')
    //const items = Array.from({ length: 20 }, (_, index) => `Elemento ${index + 1}`);
    const items = [
        {id: 1, title: 'Liceo Guillermo Gronemeyer', lat: -33.04946316578592, lng: -71.43684884746624, content: 'Centro de Acopio'},
        {id: 2, title: 'Colegio Fernando Durán', lat: -33.0461333581351, lng: -71.4505121510701, content: 'Centro de Acopio'},
        {id: 3, title: 'Liceo Comercial Alejandro Lubet', lat: -33.045238526920876, lng: -71.43947051863047, content: 'Centro de Acopio'}
      ];
    
    let lati, longi;
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    
    const setPosition = (latitude, longitude) => {
        setLat(latitude);
        setLng(longitude);
        //alert(`Latitud ${lat} y longitud ${lng}`);
      };

    return (
        <div style={{marginTop:0}}>
            <Form>
                <section id="section">
                    <Container fluid className="mt-4">
                        <Row style={{marginTop:40, textAlign:'left'}}>
                            <Col md={7} style={{ marginLeft: '30px' }}> {/* Busqueda para establecer ubicación*/}
                                <Form.Group>
                                    <label>Establecer Ubicación:</label>
                                    <Form.Control id="location" onChange={(component) => setLocation(component.target.value)} />
                                </Form.Group>
                                <br/>
                                <label>Seleccionar ubicación:</label>
                                <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' } } >
                                    {items.map((item) => (
                                    <a key={item.id}>
                                        <ListGroup.Item action variant='light' onClick={setPosition} as="li" className="d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">{item.title}</div>
                                                {item.content}
                                            </div>
                                        </ListGroup.Item>
                                    </a>))}
                                </ListGroup>
                            </Col>
                            <Col md={4} >
                                <Map title={'New position'} lat={-33.04946316578592} lng={-71.43684884746624}/>
                            </Col>
                        </Row>
                 </Container>
                </section>
            </Form>
        </div>
    )
}

//className="list-group"
//style={{ maxHeight: '300px', overflowY: 'scroll' }} >
//{items.map((item) => (
//<a key={item.id} className="list-group-item list-group-item-action">
//    {item.title }
//</a>

export default MainPage