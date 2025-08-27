import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 20.2961, // example latitude for KIIT University
  lng: 85.8188, // example longitude for KIIT University
};

const EventMap = ({ eventLocation }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={eventLocation || center} zoom={15}>
        {eventLocation && <Marker position={eventLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default EventMap;
