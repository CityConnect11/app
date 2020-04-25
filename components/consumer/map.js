import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

const ConsumerMap = () => {
  const showPopup = () => null;
  return (
    <>
      <Map view={{ center: [0, 0], zoom: 2 }} onClick={showPopup}>
        <Layers>
          <layer.Tile />
        </Layers>
        <Controls attribution={false} zoom={true}>
          <control.Rotate />
          <control.ScaleLine />
          <control.FullScreen />
          <control.OverviewMap />
          <control.ZoomSlider />
          <control.ZoomToExtent />
          <control.Zoom />
        </Controls>
      </Map>
    </>
  );
}
export default ConsumerMap;