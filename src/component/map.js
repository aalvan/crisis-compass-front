import React, {useState} from "react";
import GoogleMapReact from 'google-map-react';
import './component.css';

function Map ({title, lat, lng}) {
  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(lng);

  // Actualiza el estado cuando las props cambian
  useEffect(() => {
      setLatitude(lat);
      setLongitude(lng);
  }, [lat, lng]);

  const defaultProps = {
      center: {
          lat: latitude,
          lng: longitude,
      },
      zoom: 15,
  };

  const Marker = ({ text }) => <div className='marker'>{text}</div>;

  const handleApiLoaded = (map, maps) => {
      // use map and maps objects
  };

  return (
      <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyA9RtkiTBGzvHcsY1sihEjVJue941LG59s" }}
              center={defaultProps.center} // Actualiza el centro con los nuevos valores de latitud y longitud
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
              <Marker
                  lat={latitude}
                  lng={longitude}
                  text={title}
              />
          </GoogleMapReact>
      </div>
  );
}

export default Map