import React,{useEffect} from "react"
import GoogleMapReact from 'google-map-react'
import IconButton from "@material-ui/core/IconButton";
import { Settings, KeyboardBackspace } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const backbuttonStyles = {
  position: "absolute",
  zIndex: "99999999",
  padding: "12px",
  left: "20px",
  top: "10px",
  backgroundColor: "white",
}

const defaultStartCords = {
  lat: -1.2884,
  lng: 36.8233
}

function MapContainer(props){
  const route = props.route
  const startLocation = (route && route.routes && route.routes[0].start_location) || defaultStartCords
  const startAddress = (route && route.routes && route.routes[0].start_address) || "Mile End Station"
  const endAddress = (route && route.routes && route.routes[0].end_address) || "Bromley-by-bow Station"
  const mode = (route && route.mode.toUpperCase()) || "DRIVING"


  const mapLoaded = ({map, maps}) => {
    console.log(map);
    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();

    directionsRenderer.setMap(map)
    const request = {
      origin: startAddress,
      destination: endAddress,
      travelMode: mode
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    })
  }

  const { noBack } = props;
  const history = useHistory();

  const goBack = () => {
    // history.goBack();
    window.history.back();
  };

  return(
    <div style={{ height: '100vh', width: '100vw' }}>
      <IconButton aria-label="back" edge="start" onClick={goBack} style={backbuttonStyles}>
        <KeyboardBackspace />
      </IconButton>
      <GoogleMapReact
        bootstrapURLKeys={{key:"AIzaSyBqGmTX94CtMwLDQvOk-VeVPoYIgkH_Yoc"}}
        defaultCenter={startLocation}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={mapLoaded}
      />
    </div>
  )
}

// <Map
//   google={props.google}
//   zoom={14}
//   style={mapStyle}
//   initialCenter={{
//     lat: startLocation.lat,
//     lng: startLocation.lng
//   }}
// />
export default MapContainer
