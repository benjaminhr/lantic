import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyle = {
    width: "100%",
    height: "100%"
};

const defaultStartCords = {
    lat: -1.2884,
    lng: 36.8233
};

function MapContainer(props) {
    const { route } = props;
    const startLocation = (route && route.routes && route.routes[0].start_location) || defaultStartCords;
    console.log(startLocation);
    console.log(props.map);
    console.log(props.google.maps);
    return (
        <Map
            google={props.google}
            zoom={14}
            style={mapStyle}
            initialCenter={{
                lat: startLocation.lat,
                lng: startLocation.lng
            }}
        />
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBqGmTX94CtMwLDQvOk-VeVPoYIgkH_Yoc"
})(MapContainer);
