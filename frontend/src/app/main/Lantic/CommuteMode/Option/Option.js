import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ImageIcon from "@material-ui/icons/Image";

function Option(props) {
    const active = props.active;

    const activate = () => {
        props.set(props.id);
    };

    return (
        <ListItem className={"py-0 border mb-4"} selected={active} onClick={activate} button>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
    );
}

export default Option;
