import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

const initialState = {
  lat: 51.1593825,
  lng: 10.360841412743413,
  zoom: 13
};

const MapObject = () => {
  const [state] = useState(initialState);
  const position = [state.lat, state.lng];
  return (
    <LeafletMap center={position} zoom={state.zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
    </LeafletMap>
  );
}

export default MapObject;