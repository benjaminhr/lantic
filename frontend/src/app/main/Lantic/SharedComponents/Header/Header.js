import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Settings, KeyboardBackspace } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function Header(props) {
    const { noBack } = props;
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="grid grid-cols-4">
            {noBack ? (
                <span />
            ) : (
                <IconButton aria-label="back" edge="start" onClick={goBack}>
                    <KeyboardBackspace />
                </IconButton>
            )}
            <span />
            <span />
            <IconButton aria-label="settings" edge="end">
                <Settings />
            </IconButton>
        </div>
    );
}

export default Header;
