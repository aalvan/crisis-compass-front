import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {Col, Form, Button, Row, Modal, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from "prop-types";

function Stock({id, show, handleClose, onSubmit}) {
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        // Fetch locations from the API
        axios.get(`http://localhost:3001/api/location/${id}`).then(response => {
            const locationData = {
                id: response.data.id,
                title: response.data.name,
                content: `${response.data.address}, ${response.data.city}, ${response.data.region}`,
                lat: response.data.lat,
                lng: response.data.lng
            };
            setLocation(locationData);
            setTitle(response.data.name); 
            setContent(`Located in ${response.data.city}, ${response.data.region}`)
        })

            .catch(error => {
                console.error("There was an error fetching the locations!", error);
            });
    }, []);
    

    //solicitar unirse
    const volunteersClick = () => {
      alert(`solicitud enviada`)
      //enviar correo
    };

    return (
      <>
        <Modal show={show} onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {location && (
            <div>
              <p>{content}</p>
            </div>
          )}
        </Modal.Body>
          <Modal.Footer>
            <Container>
                <Row className="justify-content-center">
                        <Col md="auto">
                            <Button 
                                id='login'
                                type="submit"
                                variant="dark"
                                name="init" 
                                size="md" 
                                onClick={volunteersClick}  
                                style={{backgroundColor: "#BF5050", }}
                                >Ofrecer ayuda
                            </Button>
                        </Col>
                    </Row>
              </Container>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Stock;