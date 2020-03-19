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

    const showButton = {
        button: !props.noBtn,
        onClick: !props.noBtn ? activate : () => null,
        selected: !props.noBtn ? active : false,
        divider: !!props.noBtn
    };

    return (
        <ListItem className={"py-0 mb-4 rounded-lg bg-white"} {...showButton}>
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
