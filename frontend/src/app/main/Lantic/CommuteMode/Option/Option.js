import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import { DirectionsTransit, DirectionsWalk, DirectionsCar } from "@material-ui/icons";
import _ from "lodash";

function Option(props) {
    const { route, setOption, active, id } = props;
    const { mode, duration } = route;

    const activate = () => {
        setOption(id);
    };

    return (
        <ListItem className={"py-0 border mb-4 rounded-lg bg-white"} selected={active} onClick={activate} button>
            <ListItemAvatar>
                <Avatar style={{ color: "#435783", backgroundColor: "#BCD0DE" }}>
                    {mode === "walking" && <DirectionsWalk />}
                    {mode === "transit" && <DirectionsTransit />}
                    {mode === "driving" && <DirectionsCar />}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={_.capitalize(mode)} secondary={duration} />
        </ListItem>
    );
}

export default Option;
