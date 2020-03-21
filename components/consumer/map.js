import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

const ConsumerMap = () => {
  var map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  });
  map.setTarget("map");
  return (
    <div id="map"></div>
  );
}
export default ConsumerMap;