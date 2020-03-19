import React, { useEffect } from "react";
import { DirectionsTransit, DirectionsWalk, DirectionsCar, Album, MoreVert } from "@material-ui/icons";
import _ from "lodash";
import FuseAnimateGroup from "@fuse/core/FuseAnimateGroup";
import { Typography, ListItem, ListItemAvatar, Avatar, ListItemText, List } from "@material-ui/core";
import axios from "axios";

function RouteDetails(props) {
    const { route } = props;
    const { mode, duration, routes } = route;
    const [weatherInfo, setWeatherInfo] = React.useState();

    const { steps } = routes[0];

    useEffect(() => {
        Promise.all(
            steps.map(
                step =>
                    new Promise(resolveOuter => {
                        new Promise(resolveInner => {
                            axios
                                .get(`/api/getWeather?lon=${step.end_location.lng}&lat=${step.end_location.lat}`)
                                .then(resp => resolveInner(resp.data))
                                .catch(() => "N/A");
                        }).then(weather => {
                            resolveOuter({ ...step, weather });
                        });
                    })
            )
        ).then(ST => {
            setWeatherInfo(ST);
        });
    }, [steps]);

    const seperatorDots = key => (
        <ListItem className="py-0" key={key}>
            <ListItemAvatar>
                <Avatar className="bg-white text-black">
                    <MoreVert />
                </Avatar>
            </ListItemAvatar>
        </ListItem>
    );

    return (
        <List className="bg-white pt-0 rounded-lg">
            <ListItem className="py-0 mb-4 rounded-lg bg-white">
                <ListItemAvatar>
                    <Avatar style={{ color: "#435783", backgroundColor: "#BCD0DE" }}>
                        {mode === "walking" && <DirectionsWalk />}
                        {mode === "transit" && <DirectionsTransit />}
                        {mode === "driving" && <DirectionsCar />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={_.capitalize(mode)} secondary={duration} />
            </ListItem>
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn"
                }}
            >
                {weatherInfo &&
                    weatherInfo.map((step, i) => (
                        <React.Fragment key={i}>
                            <ListItem dense className="py-0 bg-white">
                                <ListItemAvatar>
                                    <Avatar className="bg-white" style={{ color: "#435783" }}>
                                        <Album />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={step.html_instructions} />
                                <ListItemAvatar>
                                    <Avatar style={{ color: "#435783", backgroundColor: "#BCD0DE" }}>
                                        <img src={step.weather.icon_url} alt="weather icon" />
                                    </Avatar>
                                    {step.weather.status_name}
                                </ListItemAvatar>
                            </ListItem>
                            {i < steps.length - 1 && seperatorDots(steps.length + i)}
                            {console.log(step)}
                        </React.Fragment>
                    ))}
            </FuseAnimateGroup>
        </List>
    );
}

export default RouteDetails;
