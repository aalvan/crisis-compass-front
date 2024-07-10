import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {Col, Button, Row, Modal, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from './UserContext';
import ShowCapacity from './showCapacity';

function Stock({id, show, handleClose, onSubmit}) {
    const { user } = useContext(UserContext);
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
                locationType: response.data.locationType,
                lat: response.data.latitude,
                lng: response.data.longitude
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
    const helpClick = ({ iduser, idlocation }) => {
      if(user !== null){
        alert(`Solicitud enviada`);

        axios.put(`http://localhost:3001/api/user/${iduser}`, { assigned_location_id: idlocation })
          .then(response => {
            console.log('Datos actualizados:', response.data);
          })
          .catch(error => {
            console.error('Hubo un error al actualizar los datos:', error);
          })
      }
      else {
        alert(`Por favor iniciar sesión primero`);
      }
    }

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
              {location.locationType ? (
                <>
                <p>Albergue</p>
                <ShowCapacity idLocation={location.id}/>
                </>
                ) : (
                <>
                <p>Centro de acopio</p>
                </>
              )}
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
                                onClick={() => helpClick({iduser: user?.id, idlocation: location.id })} 
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