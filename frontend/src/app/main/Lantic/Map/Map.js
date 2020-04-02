import React from "react";
import GoogleMapReact from "google-map-react";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import { KeyboardBackspace } from "@material-ui/icons";

const backButtonStyles = {
    position: "absolute",
    zIndex: "99999999",
    padding: "12px",
    left: "20px",
    top: "10px",
    backgroundColor: "white"
};

const weatherButtonStyles = {
    position: "absolute",
    zIndex: "99999999",
    bottom: "-47px",
    width: "80%",
    left: "43%",
    right: "50%",
    transform: "translate(-50%, -50%)",
}

const mapStyles = {
    position: "fixed",
    top: "0",
    height: "100vh", 
    width: "100vw"
}

const defaultStartCords = {
    lat: -1.2884,
    lng: 36.8233
};

function MapContainer(props) {
    const { route } = props;
    const startLocation = (route && route.routes && route.routes[0].start_location) || defaultStartCords;
    const startAddress = (route && route.routes && route.routes[0].start_address) || "Mile End Station";
    const endAddress = (route && route.routes && route.routes[0].end_address) || "Bromley-by-bow Station";
    const mode = (route && route.mode.toUpperCase()) || "DRIVING";

    const getAverageWeather = () => {
        if (!route) return {}
        const weather = props.weather // array of steps + weather
        const conditions = weather.map(step => step.weather.status_name)
        
        const count = {}
        for (let condition of conditions) {
            if (count.hasOwnProperty(condition)) {
                count[condition]++
            } else {
                count[condition] = 1
            }    
        }

        const sortedConditions = Object.keys(count).sort((a,b) => count[b] - count[a])
        const mostOften = sortedConditions[0]
        const weatherObj = weather.find(step => step.weather.status_name === mostOften)
        return weatherObj
    }

    const mapLoaded = ({ map, maps }) => {
        const directionsService = new maps.DirectionsService();
        const directionsRenderer = new maps.DirectionsRenderer();

        directionsRenderer.setMap(map);
        const request = {
            origin: startAddress,
            destination: endAddress,
            travelMode: mode
        };
        directionsService.route(request, function(result, status) {
            if (status === "OK") {
                directionsRenderer.setDirections(result);
            }
        });
    };

    const goBack = () => {
        props.history.goBack();
    };

    const weather = getAverageWeather()
    let { description, icon_url, temperature } = weather.weather
    description = (description && description[0].toUpperCase() + description.slice(1)) || ""

    return (
        <div style={mapStyles}>
            <IconButton aria-label="back" edge="start" onClick={goBack} style={backButtonStyles}>
                <KeyboardBackspace />
            </IconButton>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBqGmTX94CtMwLDQvOk-VeVPoYIgkH_Yoc" }}
                defaultCenter={startLocation}
                defaultZoom={13}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={mapLoaded}
            />
            <Fab
                style={weatherButtonStyles}
                className="w-full my-64"
                variant="extended"
                color="primary"
                aria-label="weather"
            >
                <img 
                    src={icon_url} 
                    alt="weather" 
                    style={{ 
                        width: "50px", 
                        marginLeft: "-15px",
                        marginRight: "5px"
                    }} 
                />
                {description + " with " + temperature + "°C"}
            </Fab>
        </div>
    );
}

export default MapContainer;
