import React from "react";
import { DirectionsTransit, DirectionsWalk, DirectionsCar, Album, MoreVert } from "@material-ui/icons";
import _ from "lodash";
import FuseAnimateGroup from "@fuse/core/FuseAnimateGroup";
import { Typography, ListItem, ListItemAvatar, Avatar, ListItemText, List } from "@material-ui/core";

function RouteDetails(props) {
    const { route } = props;
    const { mode, duration, distance, routes } = route;

    const seperatorDots = key => (
        <ListItem className={"py-0"} key={key}>
            <ListItemAvatar>
                <Avatar className="bg-white text-black">
                    <MoreVert />
                </Avatar>
            </ListItemAvatar>
        </ListItem>
    );

    return (
        <List className={"bg-white pt-0 rounded-lg pb-4"}>
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
                {routes.map((route, i) => (
                    <React.Fragment key={i}>
                        <ListItem dense className="py-0 bg-white">
                            <ListItemAvatar>
                                <Avatar className={"bg-white"} style={{ color: "#435783" }}>
                                    <Album />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={route.instruction} />
                            <Typography>{route.weather}</Typography>
                        </ListItem>
                        {i < routes.length - 1 && seperatorDots(routes.length + i)}
                    </React.Fragment>
                ))}
            </FuseAnimateGroup>
        </List>
    );
}

export default RouteDetails;
