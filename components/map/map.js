import * as ol from 'openlayers';
import {
  interaction, layer, custom, control,
  Interactions, Overlays, Controls,
  Map, Layers, Overlay, Util
} from "react-openlayers";
import { useState } from 'react';

const initialState = {
  lat: 51.1593825,
  lng: 10.360841412743413,
  zoom: 5
};

const MapObject = () => {
  const [state] = useState(initialState);
  return (
    <>
      <Map view={{ center: ol.proj.fromLonLat([state.lng, state.lat]), zoom: state.zoom }}>
        <Layers>
          <layer.Tile />
        </Layers>
        <Controls attribution={false} zoom={true}>
          <control.OverviewMap />
          <control.Zoom />
        </Controls>
      </Map>
    </>
  );
}

export default MapObject;