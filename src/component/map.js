import React, {useState} from "react";
import GoogleMapReact from 'google-map-react';
import './component.css';

function Map ({title, lat, lng}) {
    const [latitude, setLatitude] = useState(-33.04523588697034)
    const [longitude, setLongitude] = useState(-71.44504231878136)

    //if (lat !== 0 && lng !== 0){
    //  setLatitude(lat);
    //  setLongitude(lng);
    //}

    const defaultProps = {
        center: {
          lat: lat,
          lng: lng
        },
        zoom: 15
      };



      const Marker = ({text}) => <div className='marker'>{text}</div>;

      const handleApiLoaded = (map, maps) => {
        // use map and maps objects
      };


      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA9RtkiTBGzvHcsY1sihEjVJue941LG59s" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
        <Marker
          lat={lat}
          lng={lng}
          text={title}
        />
          </GoogleMapReact>
        </div>
      );
}

export default Map