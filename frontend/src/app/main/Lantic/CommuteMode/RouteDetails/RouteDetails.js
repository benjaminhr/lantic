import React, { useEffect } from "react";
import { Album, MoreVert } from "@material-ui/icons";
import FuseAnimateGroup from "@fuse/core/FuseAnimateGroup";
import { ListItem, ListItemAvatar, Avatar, ListItemText, List, CircularProgress } from "@material-ui/core";
import axios from "axios";
import Option from "app/main/Lantic/CommuteMode/Option/Option";
import { useParams } from "react-router-dom";

function RouteDetails(props) {
    const { routes, weatherInfo, setWeatherInfo } = props;
    const { routeType } = useParams();
    const route = routes.find(rt => rt.mode === routeType);
    const { steps } = route.routes[0];

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
    }, [setWeatherInfo, steps]);

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
        <List className="bg-white rounded-lg">
            <Option route={route} active={false} noBtn={1} />
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn"
                }}
            >
                {!weatherInfo ? (
                    <div className="text-center">
                        <CircularProgress />
                    </div>
                ) : (
                    weatherInfo.map((step, i) => (
                        <React.Fragment key={i}>
                            <ListItem dense className="py-0 bg-white">
                                <ListItemAvatar>
                                    <Avatar className="bg-white" style={{ color: "#435783" }}>
                                        <Album />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span dangerouslySetInnerHTML={{ __html: step.html_instructions }} />}
                                />
                                <ListItemAvatar>
                                    <>
                                        <Avatar style={{ color: "#435783", backgroundColor: "#BCD0DE" }}>
                                            <img src={step.weather.icon_url} alt="weather icon" />
                                        </Avatar>
                                        {step.weather.status_name}
                                    </>
                                </ListItemAvatar>
                            </ListItem>
                            {i < weatherInfo.length - 1 && seperatorDots(weatherInfo.length + i)}
                        </React.Fragment>
                    ))
                )}
            </FuseAnimateGroup>
        </List>
    );
}

export default RouteDetails;
