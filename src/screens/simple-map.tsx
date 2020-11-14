import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

const SimpleMap = (props: any) => {
  const [center, ] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, ] = useState(11);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCJ1GCN1WQ-V-VJBbXX1O5RZkRkDohpBeY' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={11.0168}
          lng={76.9558}
          name="My Marker"
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;