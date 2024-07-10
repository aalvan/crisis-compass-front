import {useEffect, useState} from 'react'
import { Form, Row, Col, Container, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Map from './map';
import axios from "axios";
import Stock from './modalStock';

function MainPage () {
    //const items = Array.from({ length: 20 }, (_, index) => `Elemento ${index + 1}`);
    //const items = [
    //    {id: 1, title: 'Liceo Guillermo Gronemeyer', lat: -33.04946316578592, lng: -71.43684884746624, content: 'Centro de Acopio'},
    //    {id: 2, title: 'Colegio Fernando Durán', lat: -33.0461333581351, lng: -71.4505121510701, content: 'Centro de Acopio'},
    //    {id: 3, title: 'Liceo Comercial Alejandro Lubet', lat: -33.045238526920876, lng: -71.43947051863047, content: 'Centro de Acopio'}
    //  ];
    const [location, setLocation] = useState('');
    const [items, setItems] = useState([]);
    const [lat, setLat] = useState(-33.04946316578592);
    const [lng, setLng] = useState(-71.43684884746624);
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    

    const handleShow = (id) => {
        setSelectedId(id);
        setShowModal(true);
      };
    
      const handleClose = () => {
        setShowModal(false);
        setSelectedId(null);
      };
    
    useEffect(() => {
        // Fetch locations from the API
        axios.get('http://localhost:3001/api/locations')
            .then(response => {
                // Map the response data to match the required format
                const locations = response.data.map(loc => ({
                    id: loc.id,
                    title: loc.name,
                    content: `${loc.address}, ${loc.city}, ${loc.region}`,
                    lat: loc.latitude,
                    lng: loc.longitude
                }));
                setItems(locations);
            })
            .catch(error => {
                console.error("There was an error fetching the locations!", error);
            });
    }, []);
    
    const setPosition = (id, latitude, longitude) => {
        handleShow(id)
        setLat(latitude)
        setLng(longitude)
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
                                <ListGroup style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                                {items.map((item) => (
                                <ListGroup.Item 
                                    key={item.id} 
                                    action 
                                    variant='light' 
                                    onClick={() => setPosition(item.id, item.latitude, item.longitude)}
                                    as="li" 
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">{item.title}</div>
                                    {item.content}
                                    </div>
                                </ListGroup.Item>
                                ))}
                            </ListGroup>
                            </Col>
                            <Col md={4} >
                                <Map title={'New position'} lat={lat} lng={lng} height={'50vh'} width={'100%'}/>
                            </Col>
                        </Row>
                 </Container>
                </section>
            </Form>
            {selectedId && (
        <Stock 
          id={selectedId} 
          show={showModal} 
          handleClose={handleClose} 
        />
      )}
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