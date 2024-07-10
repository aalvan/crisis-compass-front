import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagePath from '../assets/V.jpg';
import Map from './map';
import imagePath2 from '../assets/Person.jpg';
import imagePath3 from '../assets/edit-text.png';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ControlLocation from '../component/adminControlLocation';
import ControlStock from '../component/adminControlStock';
import ControlCapacity from './adminControlCapacity';

function PresentationCard({ id }) {
    const [user, setUser] = useState(null);
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      // Fetch user data from the API
      axios.get(`http://localhost:3001/api/user/${id}`).then(response => {
        const userData = {
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          phone: response.data.phone,
          mail: response.data.mail,
          type: response.data.user_type,
          locationId: response.data.assigned_location_id
        };
        setUser(userData);
      }).catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
    }, [id]);
  
    useEffect(() => {
      if (user && user.locationId) {
        // Fetch location data from the API
        axios.get(`http://localhost:3001/api/location/${user.locationId}`).then(response => {
          const locationData = {
            id: response.data.id,
            title: response.data.name,
            content: `${response.data.address}, ${response.data.city}, ${response.data.region}`,
            latitude: response.data.latitude,
            longitude: response.data.longitude
          };
          setLocation(locationData);
        }).catch(error => {
          console.error("There was an error fetching the location data!", error);
        });
      }
    }, [user]);
  
    if (!user || !location) {
      return <div>Loading...</div>;
    }

    return (
        <div className='Card'>
            <div className="container text-center">
                <br/>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={imagePath2} className="card-img-top" alt="user"/>
                            <div className="card-body">
                                <h7 className="card-title">{user.name}</h7>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Información</h5>
                                <div className="row"><h8 className="text-start">Correo electrónico</h8></div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder={user.mail} aria-label="usuario@gmail.com" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} width="15" height="15" alt="edit"/></button>
                                </div>
                                <div className="row"><h8 className="text-start">Número de telefono</h8></div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder={user.phone} aria-label="912345678" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} width="15" height="15" alt="edit"/></button>
                                </div>
                                <div className="row"><h8 className="text-start">Dirección</h8></div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder={user.address} aria-label="Av España 1450" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} width="15" height="15" alt="edit"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <Map title={'Locación'} lat={location.latitude} lng={location.longitude} height={'100%'} width={'100%'}/>
                    </div>
                </div>
                
                {user.type && location && (
                    <div className="row mt-4">
                        <div className="col">
                            <div className="card">
                            <div className="card-body">
                                    <h5 className="card-title">Dirección Asignada</h5>
                                    <p className="card-text">{location.title}</p>
                                    <p className="card-text">{location.content}</p>
                                    <ControlLocation/>
                                    {location.locationType ? (
                                      <>
                                      <p>shelter</p>
                                      <ControlCapacity/>
                                      </>
                                      ) : (
                                      <>
                                      <p>colecction center</p>
                                      <ControlStock/>
                                      </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            
            </div>
        </div>
    )
}

export default PresentationCard;