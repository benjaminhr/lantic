import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Settings, KeyboardArrowLeft, KeyboardBackspace } from "@material-ui/icons";

function Header(props) {
    if (props.backLoc) {
        const goBack = () => {
            alert("go back");
            props.back();
        };
    }

    const goBack = () => {
        props.back(props.backLoc);
    };

    return (
        <div className={`grid grid-cols-4`}>
            {props.backLoc ? (
                <IconButton aria-label="back" edge="start" onClick={goBack}>
                    <KeyboardBackspace />
                </IconButton>
            ) : (
                <span></span>
            )}
            <span></span>
            <span></span>
            <IconButton aria-label="settings" edge="end">
                <Settings />
            </IconButton>
        </div>
    );
}

export default Header;
