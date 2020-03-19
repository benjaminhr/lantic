import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Settings, KeyboardBackspace } from "@material-ui/icons";

function Header(props) {
    const { setPage, backLoc } = props;

    const goBack = () => {
        setPage(backLoc);
    };

    return (
        <div className="grid grid-cols-4">
            {backLoc ? (
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
