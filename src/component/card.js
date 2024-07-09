import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagePath from '../assets/V.jpg';
import imagePath2 from '../assets/Person.jpg';
import imagePath3 from '../assets/edit-text.png';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            lat: response.data.lat,
            lng: response.data.lng
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

    return(
        <div className='Card'>
            <div class="container text-center ">
                <br/>
                <div class="row">
                    <div class="col">
                        <div class="card" >
                        <img src={imagePath2} class="card-img-top" alt="user"/>
                        <div class="card-body">
                            <h7 class="card-title">{user.name}</h7>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Información</h5>
                            <div class="row"><h8 class="text-start">Correo electrónico</h8></div>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder={user.mail} aria-label="usuario@gmail.com" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} width="15" height="15" alt="edit"/></button>
                                </div>
                            <div class="row"><h8 class="text-start">Número de telefono</h8></div>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder={user.phone} aria-label="912345678" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} width="15" height="15" alt="edit"/></button>
                                </div>
                            <div class="row"><h8 class="text-start">Dirección</h8></div>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder={user.address} aria-label="Av España 1450" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} width="15" height="15" alt="edit"/></button>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-bg-dark">
                        <img 
                            src={imagePath} class="card-img" alt="location"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Dirección Asignada</h5>
                            <p class="card-text">Dirección</p>
                        </div>
                        </div>
                    </div>
                    {user.type && location && (
                    <div className="col">
                    <div className="card text-bg-dark">
                        <div className="card-img-overlay">
                        <h5 className="card-title">Dirección Asignada</h5>
                        <p className="card-text">{location.content}</p>
                        <p className="card-text">Latitud: {location.lat}</p>
                        <p className="card-text">Longitud: {location.lng}</p>
                        </div>
                    </div>
                    </div>
                    )}
                </div>
                </div>
        </div>
    )
}

export default PresentationCard